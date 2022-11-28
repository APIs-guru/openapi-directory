import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApplicationPathParams extends SpeakeasyBase {
    application: string;
}
export declare class DeleteApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    pathParams: DeleteApplicationPathParams;
    headers: DeleteApplicationHeaders;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    deleteApplicationResponse?: shared.DeleteApplicationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
