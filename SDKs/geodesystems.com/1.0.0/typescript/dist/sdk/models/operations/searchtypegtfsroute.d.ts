import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeGtfsRouteQueryParams extends SpeakeasyBase {
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
    searchTypeGtfsRouteRouteId?: string;
    searchTypeGtfsRouteStopNames?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeGtfsRouteRequest extends SpeakeasyBase {
    queryParams: SearchTypeGtfsRouteQueryParams;
}
export declare class SearchTypeGtfsRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
