import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointNoaaFlaskEventQueryParams extends SpeakeasyBase {
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
    searchTypePointNoaaFlaskEventLabIdNumber?: string;
    searchTypePointNoaaFlaskEventMeasurementGroup?: string;
    searchTypePointNoaaFlaskEventParameter?: string;
    searchTypePointNoaaFlaskEventProject?: string;
    searchTypePointNoaaFlaskEventSiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointNoaaFlaskEventRequest extends SpeakeasyBase {
    queryParams: SearchTypePointNoaaFlaskEventQueryParams;
}
export declare class SearchTypePointNoaaFlaskEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
