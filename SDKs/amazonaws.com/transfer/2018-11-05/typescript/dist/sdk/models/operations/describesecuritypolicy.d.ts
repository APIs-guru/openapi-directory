import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSecurityPolicyXAmzTargetEnum {
    TransferServiceDescribeSecurityPolicy = "TransferService.DescribeSecurityPolicy"
}
export declare class DescribeSecurityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSecurityPolicyXAmzTargetEnum;
}
export declare class DescribeSecurityPolicyRequest extends SpeakeasyBase {
    headers: DescribeSecurityPolicyHeaders;
    request: shared.DescribeSecurityPolicyRequest;
}
export declare class DescribeSecurityPolicyResponse extends SpeakeasyBase {
    contentType: string;
    describeSecurityPolicyResponse?: shared.DescribeSecurityPolicyResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
