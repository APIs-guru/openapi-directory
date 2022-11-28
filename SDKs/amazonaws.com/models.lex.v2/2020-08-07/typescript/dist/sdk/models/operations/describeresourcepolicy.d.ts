import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeResourcePolicyPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class DescribeResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeResourcePolicyRequest extends SpeakeasyBase {
    pathParams: DescribeResourcePolicyPathParams;
    headers: DescribeResourcePolicyHeaders;
}
export declare class DescribeResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    describeResourcePolicyResponse?: shared.DescribeResourcePolicyResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
