import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeGtfsAgencyQueryParams extends SpeakeasyBase {
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
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeGtfsAgencyRequest extends SpeakeasyBase {
    queryParams: SearchTypeGtfsAgencyQueryParams;
}
export declare class SearchTypeGtfsAgencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
