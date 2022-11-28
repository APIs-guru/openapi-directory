import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProcessingJobXAmzTargetEnum {
    SageMakerCreateProcessingJob = "SageMaker.CreateProcessingJob"
}
export declare class CreateProcessingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProcessingJobXAmzTargetEnum;
}
export declare class CreateProcessingJobRequest extends SpeakeasyBase {
    headers: CreateProcessingJobHeaders;
    request: shared.CreateProcessingJobRequest;
}
export declare class CreateProcessingJobResponse extends SpeakeasyBase {
    contentType: string;
    createProcessingJobResponse?: shared.CreateProcessingJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}
