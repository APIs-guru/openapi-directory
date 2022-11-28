import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchWikipageQueryParams extends SpeakeasyBase {
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
    searchWikipageCategory?: string;
    searchWikipageWikitext?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchWikipageRequest extends SpeakeasyBase {
    queryParams: SearchWikipageQueryParams;
}
export declare class SearchWikipageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
