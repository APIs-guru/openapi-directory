import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopProcessingJobXAmzTargetEnum {
    SageMakerStopProcessingJob = "SageMaker.StopProcessingJob"
}
export declare class StopProcessingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopProcessingJobXAmzTargetEnum;
}
export declare class StopProcessingJobRequest extends SpeakeasyBase {
    headers: StopProcessingJobHeaders;
    request: shared.StopProcessingJobRequest;
}
export declare class StopProcessingJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
