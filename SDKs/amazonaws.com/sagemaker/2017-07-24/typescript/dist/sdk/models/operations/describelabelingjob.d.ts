import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLabelingJobXAmzTargetEnum {
    SageMakerDescribeLabelingJob = "SageMaker.DescribeLabelingJob"
}
export declare class DescribeLabelingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLabelingJobXAmzTargetEnum;
}
export declare class DescribeLabelingJobRequest extends SpeakeasyBase {
    headers: DescribeLabelingJobHeaders;
    request: shared.DescribeLabelingJobRequest;
}
export declare class DescribeLabelingJobResponse extends SpeakeasyBase {
    contentType: string;
    describeLabelingJobResponse?: shared.DescribeLabelingJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
