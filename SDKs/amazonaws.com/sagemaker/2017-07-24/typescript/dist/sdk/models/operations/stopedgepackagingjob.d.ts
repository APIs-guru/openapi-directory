import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopEdgePackagingJobXAmzTargetEnum {
    SageMakerStopEdgePackagingJob = "SageMaker.StopEdgePackagingJob"
}
export declare class StopEdgePackagingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEdgePackagingJobXAmzTargetEnum;
}
export declare class StopEdgePackagingJobRequest extends SpeakeasyBase {
    headers: StopEdgePackagingJobHeaders;
    request: shared.StopEdgePackagingJobRequest;
}
export declare class StopEdgePackagingJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
