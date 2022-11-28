import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupsRequestBody extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    queryParams: GetGroupsQueryParams;
    headers: GetGroupsHeaders;
    request: GetGroupsRequestBody;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    getGroupsResult?: shared.GetGroupsResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
