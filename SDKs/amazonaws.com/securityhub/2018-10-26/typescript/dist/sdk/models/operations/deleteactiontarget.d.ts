import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteActionTargetPathParams extends SpeakeasyBase {
    actionTargetArn: string;
}
export declare class DeleteActionTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteActionTargetRequest extends SpeakeasyBase {
    pathParams: DeleteActionTargetPathParams;
    headers: DeleteActionTargetHeaders;
}
export declare class DeleteActionTargetResponse extends SpeakeasyBase {
    contentType: string;
    deleteActionTargetResponse?: shared.DeleteActionTargetResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
