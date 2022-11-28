import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetargetingGetDatapointsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum RetargetingGetDatapointsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum RetargetingGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare class RetargetingGetDatapointsQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    onlyFavorites?: boolean;
    sortBy?: string;
    sortDirection?: RetargetingGetDatapointsSortDirectionEnum;
    status?: RetargetingGetDatapointsStatusEnum;
    tags?: string;
    textSearch?: string;
}
export declare class RetargetingGetDatapointsRequest extends SpeakeasyBase {
    pathParams: RetargetingGetDatapointsPathParams;
    queryParams: RetargetingGetDatapointsQueryParams;
}
export declare class RetargetingGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
