import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointAmrcFinalQueryParams extends SpeakeasyBase {
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
    searchTypePointAmrcFinalArgosId?: string;
    searchTypePointAmrcFinalSiteId?: string;
    searchTypePointAmrcFinalSiteName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointAmrcFinalRequest extends SpeakeasyBase {
    queryParams: SearchTypePointAmrcFinalQueryParams;
}
export declare class SearchTypePointAmrcFinalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
