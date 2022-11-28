import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStackSummaryXAmzTargetEnum {
    OpsWorks20130218DescribeStackSummary = "OpsWorks_20130218.DescribeStackSummary"
}
export declare class DescribeStackSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStackSummaryXAmzTargetEnum;
}
export declare class DescribeStackSummaryRequest extends SpeakeasyBase {
    headers: DescribeStackSummaryHeaders;
    request: shared.DescribeStackSummaryRequest;
}
export declare class DescribeStackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    describeStackSummaryResult?: shared.DescribeStackSummaryResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
