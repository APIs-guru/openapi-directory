import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypeAwcMetarQueryParams extends SpeakeasyBase {
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
    searchTypeAwcMetarSiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeAwcMetarRequest extends SpeakeasyBase {
    queryParams: SearchTypeAwcMetarQueryParams;
}
export declare class SearchTypeAwcMetarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
