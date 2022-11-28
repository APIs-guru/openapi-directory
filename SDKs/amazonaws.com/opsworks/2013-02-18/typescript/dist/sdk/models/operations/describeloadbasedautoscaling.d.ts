import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLoadBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218DescribeLoadBasedAutoScaling = "OpsWorks_20130218.DescribeLoadBasedAutoScaling"
}
export declare class DescribeLoadBasedAutoScalingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLoadBasedAutoScalingXAmzTargetEnum;
}
export declare class DescribeLoadBasedAutoScalingRequest extends SpeakeasyBase {
    headers: DescribeLoadBasedAutoScalingHeaders;
    request: shared.DescribeLoadBasedAutoScalingRequest;
}
export declare class DescribeLoadBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    describeLoadBasedAutoScalingResult?: shared.DescribeLoadBasedAutoScalingResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
