import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeLoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeLoggingOptionsRequest extends SpeakeasyBase {
    headers: DescribeLoggingOptionsHeaders;
}
export declare class DescribeLoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    describeLoggingOptionsResponse?: shared.DescribeLoggingOptionsResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
