import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeHubQueryParams extends SpeakeasyBase {
    hubArn?: string;
}
export declare class DescribeHubHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeHubRequest extends SpeakeasyBase {
    queryParams: DescribeHubQueryParams;
    headers: DescribeHubHeaders;
}
export declare class DescribeHubResponse extends SpeakeasyBase {
    contentType: string;
    describeHubResponse?: shared.DescribeHubResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
