import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFunctionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class DeleteFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionPathParams;
    headers: DeleteFunctionHeaders;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
