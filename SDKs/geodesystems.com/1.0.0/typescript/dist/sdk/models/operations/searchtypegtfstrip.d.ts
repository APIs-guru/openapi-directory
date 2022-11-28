import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeGtfsTripQueryParams extends SpeakeasyBase {
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
    searchTypeGtfsTripBikesAllowed?: string;
    searchTypeGtfsTripStopIds?: string;
    searchTypeGtfsTripTripId?: string;
    searchTypeGtfsTripWheelchairAccessible?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeGtfsTripRequest extends SpeakeasyBase {
    queryParams: SearchTypeGtfsTripQueryParams;
}
export declare class SearchTypeGtfsTripResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
