import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssociatedAttributeGroupsPathParams extends SpeakeasyBase {
    application: string;
}
export declare class ListAssociatedAttributeGroupsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssociatedAttributeGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssociatedAttributeGroupsRequest extends SpeakeasyBase {
    pathParams: ListAssociatedAttributeGroupsPathParams;
    queryParams: ListAssociatedAttributeGroupsQueryParams;
    headers: ListAssociatedAttributeGroupsHeaders;
}
export declare class ListAssociatedAttributeGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listAssociatedAttributeGroupsResponse?: shared.ListAssociatedAttributeGroupsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
