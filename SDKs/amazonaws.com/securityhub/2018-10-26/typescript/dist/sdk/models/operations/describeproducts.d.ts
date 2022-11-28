import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProductsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    productArn?: string;
}
export declare class DescribeProductsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeProductsRequest extends SpeakeasyBase {
    queryParams: DescribeProductsQueryParams;
    headers: DescribeProductsHeaders;
}
export declare class DescribeProductsResponse extends SpeakeasyBase {
    contentType: string;
    describeProductsResponse?: shared.DescribeProductsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
