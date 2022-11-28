import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeOpsItemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeOpsItemsXAmzTargetEnum {
    AmazonSsmDescribeOpsItems = "AmazonSSM.DescribeOpsItems"
}
export declare class DescribeOpsItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOpsItemsXAmzTargetEnum;
}
export declare class DescribeOpsItemsRequest extends SpeakeasyBase {
    queryParams: DescribeOpsItemsQueryParams;
    headers: DescribeOpsItemsHeaders;
    request: shared.DescribeOpsItemsRequest;
}
export declare class DescribeOpsItemsResponse extends SpeakeasyBase {
    contentType: string;
    describeOpsItemsResponse?: shared.DescribeOpsItemsResponse;
    internalServerError?: any;
    statusCode: number;
}
