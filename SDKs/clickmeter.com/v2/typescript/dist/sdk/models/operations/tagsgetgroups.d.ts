import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsGetGroupsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum TagsGetGroupsStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class TagsGetGroupsQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    status?: TagsGetGroupsStatusEnum;
    textSearch?: string;
}
export declare class TagsGetGroupsRequest extends SpeakeasyBase {
    pathParams: TagsGetGroupsPathParams;
    queryParams: TagsGetGroupsQueryParams;
}
export declare class TagsGetGroupsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
