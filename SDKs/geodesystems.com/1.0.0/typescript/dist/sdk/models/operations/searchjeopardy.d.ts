import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchJeopardyQueryParams extends SpeakeasyBase {
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
    searchDbJeopardyAirDate?: string;
    searchDbJeopardyAnswer?: string;
    searchDbJeopardyCategory?: string;
    searchDbJeopardyQuestion?: string;
    searchDbJeopardyRound?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchJeopardyRequest extends SpeakeasyBase {
    queryParams: SearchJeopardyQueryParams;
}
export declare class SearchJeopardyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
