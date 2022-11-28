import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeResourcePoliciesXAmzTargetEnum {
    Logs20140328DescribeResourcePolicies = "Logs_20140328.DescribeResourcePolicies"
}
export declare class DescribeResourcePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourcePoliciesXAmzTargetEnum;
}
export declare class DescribeResourcePoliciesRequest extends SpeakeasyBase {
    headers: DescribeResourcePoliciesHeaders;
    request: shared.DescribeResourcePoliciesRequest;
}
export declare class DescribeResourcePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    describeResourcePoliciesResponse?: shared.DescribeResourcePoliciesResponse;
    invalidParameterException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
