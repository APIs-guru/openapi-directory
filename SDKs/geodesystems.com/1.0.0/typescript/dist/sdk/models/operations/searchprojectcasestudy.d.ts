import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectCasestudyQueryParams extends SpeakeasyBase {
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
    searchProjectCasestudyIntendedUse?: string;
    searchProjectCasestudyLocation?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectCasestudyRequest extends SpeakeasyBase {
    queryParams: SearchProjectCasestudyQueryParams;
}
export declare class SearchProjectCasestudyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
