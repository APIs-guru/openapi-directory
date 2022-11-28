import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointSnotelQueryParams extends SpeakeasyBase {
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
    searchTypePointSnotelHucId?: string;
    searchTypePointSnotelHucName?: string;
    searchTypePointSnotelNetwork?: string;
    searchTypePointSnotelSiteId?: string;
    searchTypePointSnotelSiteNumber?: string;
    searchTypePointSnotelState?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointSnotelRequest extends SpeakeasyBase {
    queryParams: SearchTypePointSnotelQueryParams;
}
export declare class SearchTypePointSnotelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
