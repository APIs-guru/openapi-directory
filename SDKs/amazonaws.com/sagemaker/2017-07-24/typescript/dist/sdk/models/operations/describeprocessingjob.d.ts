import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProcessingJobXAmzTargetEnum {
    SageMakerDescribeProcessingJob = "SageMaker.DescribeProcessingJob"
}
export declare class DescribeProcessingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProcessingJobXAmzTargetEnum;
}
export declare class DescribeProcessingJobRequest extends SpeakeasyBase {
    headers: DescribeProcessingJobHeaders;
    request: shared.DescribeProcessingJobRequest;
}
export declare class DescribeProcessingJobResponse extends SpeakeasyBase {
    contentType: string;
    describeProcessingJobResponse?: shared.DescribeProcessingJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
