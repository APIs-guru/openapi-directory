import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectStandardNameQueryParams extends SpeakeasyBase {
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
    searchProjectStandardNameAliases?: string;
    searchProjectStandardNameUnit?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectStandardNameRequest extends SpeakeasyBase {
    queryParams: SearchProjectStandardNameQueryParams;
}
export declare class SearchProjectStandardNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
