import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointNoaaTowerQueryParams extends SpeakeasyBase {
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
    searchTypePointNoaaTowerSiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointNoaaTowerRequest extends SpeakeasyBase {
    queryParams: SearchTypePointNoaaTowerQueryParams;
}
export declare class SearchTypePointNoaaTowerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
