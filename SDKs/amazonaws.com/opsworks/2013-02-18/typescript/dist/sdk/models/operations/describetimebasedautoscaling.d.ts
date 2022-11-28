import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTimeBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218DescribeTimeBasedAutoScaling = "OpsWorks_20130218.DescribeTimeBasedAutoScaling"
}
export declare class DescribeTimeBasedAutoScalingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTimeBasedAutoScalingXAmzTargetEnum;
}
export declare class DescribeTimeBasedAutoScalingRequest extends SpeakeasyBase {
    headers: DescribeTimeBasedAutoScalingHeaders;
    request: shared.DescribeTimeBasedAutoScalingRequest;
}
export declare class DescribeTimeBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    describeTimeBasedAutoScalingResult?: shared.DescribeTimeBasedAutoScalingResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
