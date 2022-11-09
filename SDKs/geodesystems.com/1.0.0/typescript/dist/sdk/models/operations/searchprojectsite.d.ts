import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchProjectSiteQueryParams extends SpeakeasyBase {
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
    searchProjectSiteCountry?: string;
    searchProjectSiteCounty?: string;
    searchProjectSiteNetwork?: string;
    searchProjectSiteShortName?: string;
    searchProjectSiteSiteType?: string;
    searchProjectSiteState?: string;
    searchProjectSiteStatus?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectSiteRequest extends SpeakeasyBase {
    queryParams: SearchProjectSiteQueryParams;
}
export declare class SearchProjectSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
