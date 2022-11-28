import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeGtfsStopQueryParams extends SpeakeasyBase {
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
    searchTypeGtfsStopLocationType?: string;
    searchTypeGtfsStopStopCode?: string;
    searchTypeGtfsStopStopId?: string;
    searchTypeGtfsStopWheelchairBoarding?: string;
    searchTypeGtfsStopZoneId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeGtfsStopRequest extends SpeakeasyBase {
    queryParams: SearchTypeGtfsStopQueryParams;
}
export declare class SearchTypeGtfsStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
