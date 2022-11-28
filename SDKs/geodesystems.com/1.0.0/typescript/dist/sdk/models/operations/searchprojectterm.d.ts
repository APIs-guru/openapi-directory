import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectTermQueryParams extends SpeakeasyBase {
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
    searchProjectTermValue?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectTermRequest extends SpeakeasyBase {
    queryParams: SearchProjectTermQueryParams;
}
export declare class SearchProjectTermResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
