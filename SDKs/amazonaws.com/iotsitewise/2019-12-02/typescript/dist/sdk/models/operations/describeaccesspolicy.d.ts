import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAccessPolicyPathParams extends SpeakeasyBase {
    accessPolicyId: string;
}
export declare class DescribeAccessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAccessPolicyRequest extends SpeakeasyBase {
    pathParams: DescribeAccessPolicyPathParams;
    headers: DescribeAccessPolicyHeaders;
}
export declare class DescribeAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    describeAccessPolicyResponse?: shared.DescribeAccessPolicyResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
