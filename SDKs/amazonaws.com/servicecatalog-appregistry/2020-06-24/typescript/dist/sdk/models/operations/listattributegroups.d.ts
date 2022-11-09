import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAttributeGroupsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAttributeGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAttributeGroupsRequest extends SpeakeasyBase {
    queryParams: ListAttributeGroupsQueryParams;
    headers: ListAttributeGroupsHeaders;
}
export declare class ListAttributeGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listAttributeGroupsResponse?: shared.ListAttributeGroupsResponse;
    statusCode: number;
    validationException?: any;
}
