import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointNoaaCarbonQueryParams extends SpeakeasyBase {
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
    searchTypePointNoaaCarbonLabIdNumber?: string;
    searchTypePointNoaaCarbonMeasurementGroup?: string;
    searchTypePointNoaaCarbonParameter?: string;
    searchTypePointNoaaCarbonProject?: string;
    searchTypePointNoaaCarbonSiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointNoaaCarbonRequest extends SpeakeasyBase {
    queryParams: SearchTypePointNoaaCarbonQueryParams;
}
export declare class SearchTypePointNoaaCarbonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
