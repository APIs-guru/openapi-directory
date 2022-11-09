import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListSchedulesMixinEnum {
    AncestorTitles = "ancestor_titles",
    Images = "images",
    Titles = "titles"
}
export declare enum ListSchedulesSortEnum {
    StartDate = "start_date"
}
export declare enum ListSchedulesSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class ListSchedulesQueryParams extends SpeakeasyBase {
    authority?: string[];
    descendantsOf?: string[];
    endFrom?: Date;
    endTo?: Date;
    format?: string[];
    genre?: string[];
    group?: string;
    id?: string[];
    idType?: string[];
    item?: string[];
    mixin?: ListSchedulesMixinEnum[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    people?: string;
    pid?: string[];
    q?: string;
    repeat?: boolean;
    scheduleDay?: Date;
    scheduleDayFrom?: Date;
    scheduleDayTo?: Date;
    serviceMasterBrand?: string[];
    sid?: string[];
    sort?: ListSchedulesSortEnum;
    sortDirection?: ListSchedulesSortDirectionEnum;
    startFrom?: Date;
    startTo?: Date;
    version?: string[];
}
export declare class ListSchedulesRequest extends SpeakeasyBase {
    queryParams: ListSchedulesQueryParams;
}
export declare class ListSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
