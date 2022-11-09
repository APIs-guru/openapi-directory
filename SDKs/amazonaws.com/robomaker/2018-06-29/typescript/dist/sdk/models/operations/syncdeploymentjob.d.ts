import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SyncDeploymentJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SyncDeploymentJobRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    fleet: string;
}
export declare class SyncDeploymentJobRequest extends SpeakeasyBase {
    headers: SyncDeploymentJobHeaders;
    request: SyncDeploymentJobRequestBody;
}
export declare class SyncDeploymentJobResponse extends SpeakeasyBase {
    concurrentDeploymentException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    syncDeploymentJobResponse?: shared.SyncDeploymentJobResponse;
    throttlingException?: any;
}
