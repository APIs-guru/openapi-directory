import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchSunrisesunsetQueryParams extends SpeakeasyBase {
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
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchSunrisesunsetRequest extends SpeakeasyBase {
    queryParams: SearchSunrisesunsetQueryParams;
}
export declare class SearchSunrisesunsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
