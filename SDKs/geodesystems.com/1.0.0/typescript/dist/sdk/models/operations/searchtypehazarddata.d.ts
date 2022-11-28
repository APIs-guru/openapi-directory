import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeHazarddataQueryParams extends SpeakeasyBase {
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
    searchTypeHazarddataSource?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeHazarddataRequest extends SpeakeasyBase {
    queryParams: SearchTypeHazarddataQueryParams;
}
export declare class SearchTypeHazarddataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
