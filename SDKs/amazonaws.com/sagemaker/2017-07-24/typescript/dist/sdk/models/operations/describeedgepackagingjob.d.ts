import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEdgePackagingJobXAmzTargetEnum {
    SageMakerDescribeEdgePackagingJob = "SageMaker.DescribeEdgePackagingJob"
}
export declare class DescribeEdgePackagingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEdgePackagingJobXAmzTargetEnum;
}
export declare class DescribeEdgePackagingJobRequest extends SpeakeasyBase {
    headers: DescribeEdgePackagingJobHeaders;
    request: shared.DescribeEdgePackagingJobRequest;
}
export declare class DescribeEdgePackagingJobResponse extends SpeakeasyBase {
    contentType: string;
    describeEdgePackagingJobResponse?: shared.DescribeEdgePackagingJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
