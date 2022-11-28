import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsGetDatapointsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum TagsGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum TagsGetDatapointsTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class TagsGetDatapointsQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    status?: TagsGetDatapointsStatusEnum;
    textSearch?: string;
    type?: TagsGetDatapointsTypeEnum;
}
export declare class TagsGetDatapointsRequest extends SpeakeasyBase {
    pathParams: TagsGetDatapointsPathParams;
    queryParams: TagsGetDatapointsQueryParams;
}
export declare class TagsGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
