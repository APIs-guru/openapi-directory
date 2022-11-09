import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointOpenaqQueryParams extends SpeakeasyBase {
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
    searchTypePointOpenaqCity?: string;
    searchTypePointOpenaqCountry?: string;
    searchTypePointOpenaqHoursOffset?: number;
    searchTypePointOpenaqLocation?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointOpenaqRequest extends SpeakeasyBase {
    queryParams: SearchTypePointOpenaqQueryParams;
}
export declare class SearchTypePointOpenaqResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
