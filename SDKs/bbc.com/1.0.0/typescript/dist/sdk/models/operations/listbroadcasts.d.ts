import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListBroadcastsMixinEnum {
    Titles = "titles"
}
export declare enum ListBroadcastsSortEnum {
    StartDate = "start_date"
}
export declare enum ListBroadcastsSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class ListBroadcastsQueryParams extends SpeakeasyBase {
    authority?: string[];
    descendantsOf?: string[];
    endFrom?: Date;
    endTo?: Date;
    format?: string[];
    genre?: string[];
    id?: string[];
    item?: string[];
    mixin?: ListBroadcastsMixinEnum[];
    page?: number;
    pageSize?: number;
    people?: string;
    pid?: string[];
    q?: string;
    scheduleDay?: Date;
    scheduleDayFrom?: Date;
    scheduleDayTo?: Date;
    serviceMasterBrand?: string[];
    sid?: string[];
    sort?: ListBroadcastsSortEnum;
    sortDirection?: ListBroadcastsSortDirectionEnum;
    startFrom?: Date;
    startTo?: Date;
    version?: string[];
}
export declare class ListBroadcastsRequest extends SpeakeasyBase {
    queryParams: ListBroadcastsQueryParams;
}
export declare class ListBroadcastsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
