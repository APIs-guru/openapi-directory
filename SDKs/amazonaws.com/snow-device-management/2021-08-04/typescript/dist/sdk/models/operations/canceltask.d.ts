import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class CancelTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelTaskRequest extends SpeakeasyBase {
    pathParams: CancelTaskPathParams;
    headers: CancelTaskHeaders;
}
export declare class CancelTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelTaskOutput?: shared.CancelTaskOutput;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
