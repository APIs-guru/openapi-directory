import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetDatapointsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GroupsGetDatapointsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GroupsGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum GroupsGetDatapointsTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class GroupsGetDatapointsQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    onlyFavorites?: boolean;
    sortBy?: string;
    sortDirection?: GroupsGetDatapointsSortDirectionEnum;
    status?: GroupsGetDatapointsStatusEnum;
    tags?: string;
    textSearch?: string;
    type?: GroupsGetDatapointsTypeEnum;
}
export declare class GroupsGetDatapointsRequest extends SpeakeasyBase {
    pathParams: GroupsGetDatapointsPathParams;
    queryParams: GroupsGetDatapointsQueryParams;
}
export declare class GroupsGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
