import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopLabelingJobXAmzTargetEnum {
    SageMakerStopLabelingJob = "SageMaker.StopLabelingJob"
}
export declare class StopLabelingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopLabelingJobXAmzTargetEnum;
}
export declare class StopLabelingJobRequest extends SpeakeasyBase {
    headers: StopLabelingJobHeaders;
    request: shared.StopLabelingJobRequest;
}
export declare class StopLabelingJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
