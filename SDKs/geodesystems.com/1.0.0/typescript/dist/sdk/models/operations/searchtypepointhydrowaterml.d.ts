import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointHydroWatermlQueryParams extends SpeakeasyBase {
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
    searchTypePointHydroWatermlSiteCode?: string;
    searchTypePointHydroWatermlSiteName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointHydroWatermlRequest extends SpeakeasyBase {
    queryParams: SearchTypePointHydroWatermlQueryParams;
}
export declare class SearchTypePointHydroWatermlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
