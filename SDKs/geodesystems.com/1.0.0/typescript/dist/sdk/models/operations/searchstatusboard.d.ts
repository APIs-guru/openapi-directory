import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchStatusboardQueryParams extends SpeakeasyBase {
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
    searchDbStatusboardStatus?: string;
    searchDbStatusboardWhat?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchStatusboardRequest extends SpeakeasyBase {
    queryParams: SearchStatusboardQueryParams;
}
export declare class SearchStatusboardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
