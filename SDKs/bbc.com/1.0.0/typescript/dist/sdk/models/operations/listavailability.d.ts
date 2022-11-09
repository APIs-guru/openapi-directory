import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAvailabilityAvailabilityEnum {
    Available = "available"
}
export declare enum ListAvailabilitySortEnum {
    ScheduledStart = "scheduled_start"
}
export declare enum ListAvailabilitySortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare enum ListAvailabilityTerritoryEnum {
    Uk = "uk",
    Nonuk = "nonuk",
    World = "world"
}
export declare class ListAvailabilityQueryParams extends SpeakeasyBase {
    availability?: ListAvailabilityAvailabilityEnum[];
    debug?: boolean;
    descendantsOf?: string[];
    mediaSet?: string[];
    page?: number;
    pageSize?: number;
    sort?: ListAvailabilitySortEnum;
    sortDirection?: ListAvailabilitySortDirectionEnum;
    territory?: ListAvailabilityTerritoryEnum[];
}
export declare class ListAvailabilityRequest extends SpeakeasyBase {
    queryParams: ListAvailabilityQueryParams;
}
export declare class ListAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
