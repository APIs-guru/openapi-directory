import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DataPointsGetSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum DataPointsGetStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum DataPointsGetTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsGetQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    onlyFavorites?: boolean;
    sortBy?: string;
    sortDirection?: DataPointsGetSortDirectionEnum;
    status?: DataPointsGetStatusEnum;
    tags?: string;
    textSearch?: string;
    type?: DataPointsGetTypeEnum;
}
export declare class DataPointsGetRequest extends SpeakeasyBase {
    queryParams: DataPointsGetQueryParams;
}
export declare class DataPointsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
