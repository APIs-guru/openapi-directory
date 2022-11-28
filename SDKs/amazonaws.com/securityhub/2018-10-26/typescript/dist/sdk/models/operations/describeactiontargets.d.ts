import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeActionTargetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeActionTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeActionTargetsRequestBody extends SpeakeasyBase {
    actionTargetArns?: string[];
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeActionTargetsRequest extends SpeakeasyBase {
    queryParams: DescribeActionTargetsQueryParams;
    headers: DescribeActionTargetsHeaders;
    request: DescribeActionTargetsRequestBody;
}
export declare class DescribeActionTargetsResponse extends SpeakeasyBase {
    contentType: string;
    describeActionTargetsResponse?: shared.DescribeActionTargetsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
