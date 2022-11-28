import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSourceServersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeSourceServersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Request to filter Source Servers list.
**/
export declare class DescribeSourceServersRequestBodyFilters extends SpeakeasyBase {
    isArchived?: boolean;
    sourceServerIDs?: string[];
}
export declare class DescribeSourceServersRequestBody extends SpeakeasyBase {
    filters: DescribeSourceServersRequestBodyFilters;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeSourceServersRequest extends SpeakeasyBase {
    queryParams: DescribeSourceServersQueryParams;
    headers: DescribeSourceServersHeaders;
    request: DescribeSourceServersRequestBody;
}
export declare class DescribeSourceServersResponse extends SpeakeasyBase {
    contentType: string;
    describeSourceServersResponse?: shared.DescribeSourceServersResponse;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
