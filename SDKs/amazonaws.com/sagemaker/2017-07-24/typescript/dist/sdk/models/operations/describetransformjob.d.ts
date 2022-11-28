import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTransformJobXAmzTargetEnum {
    SageMakerDescribeTransformJob = "SageMaker.DescribeTransformJob"
}
export declare class DescribeTransformJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTransformJobXAmzTargetEnum;
}
export declare class DescribeTransformJobRequest extends SpeakeasyBase {
    headers: DescribeTransformJobHeaders;
    request: shared.DescribeTransformJobRequest;
}
export declare class DescribeTransformJobResponse extends SpeakeasyBase {
    contentType: string;
    describeTransformJobResponse?: shared.DescribeTransformJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
