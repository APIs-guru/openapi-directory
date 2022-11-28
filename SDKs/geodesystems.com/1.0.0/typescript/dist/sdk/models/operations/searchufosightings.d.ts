import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchUfoSightingsQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbUfoSightingsCity?: string;
    searchDbUfoSightingsComments?: string;
    searchDbUfoSightingsCountry?: string;
    searchDbUfoSightingsDatePosted?: string;
    searchDbUfoSightingsDatetime?: string;
    searchDbUfoSightingsDurationHoursMin?: string;
    searchDbUfoSightingsDurationSeconds?: number;
    searchDbUfoSightingsLatitude?: number;
    searchDbUfoSightingsLongitude?: number;
    searchDbUfoSightingsShape?: string;
    searchDbUfoSightingsState?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchUfoSightingsRequest extends SpeakeasyBase {
    queryParams: SearchUfoSightingsQueryParams;
}
export declare class SearchUfoSightingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
