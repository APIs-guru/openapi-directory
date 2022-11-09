import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeFilterXAmzTargetEnum {
    AmazonPersonalizeDescribeFilter = "AmazonPersonalize.DescribeFilter"
}
export declare class DescribeFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFilterXAmzTargetEnum;
}
export declare class DescribeFilterRequest extends SpeakeasyBase {
    headers: DescribeFilterHeaders;
    request: shared.DescribeFilterRequest;
}
export declare class DescribeFilterResponse extends SpeakeasyBase {
    contentType: string;
    describeFilterResponse?: shared.DescribeFilterResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
