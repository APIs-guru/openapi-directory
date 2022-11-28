import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePortalPathParams extends SpeakeasyBase {
    portalId: string;
}
export declare class DescribePortalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribePortalRequest extends SpeakeasyBase {
    pathParams: DescribePortalPathParams;
    headers: DescribePortalHeaders;
}
export declare class DescribePortalResponse extends SpeakeasyBase {
    contentType: string;
    describePortalResponse?: shared.DescribePortalResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
