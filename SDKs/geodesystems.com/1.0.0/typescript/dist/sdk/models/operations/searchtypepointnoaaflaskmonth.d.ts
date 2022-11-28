import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointNoaaFlaskMonthQueryParams extends SpeakeasyBase {
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
    searchTypePointNoaaFlaskMonthLabIdNumber?: string;
    searchTypePointNoaaFlaskMonthMeasurementGroup?: string;
    searchTypePointNoaaFlaskMonthParameter?: string;
    searchTypePointNoaaFlaskMonthProject?: string;
    searchTypePointNoaaFlaskMonthSiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointNoaaFlaskMonthRequest extends SpeakeasyBase {
    queryParams: SearchTypePointNoaaFlaskMonthQueryParams;
}
export declare class SearchTypePointNoaaFlaskMonthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
