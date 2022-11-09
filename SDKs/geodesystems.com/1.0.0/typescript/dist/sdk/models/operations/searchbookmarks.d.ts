import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBookmarksQueryParams extends SpeakeasyBase {
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
    searchDbBookmarksCategory?: string;
    searchDbBookmarksDate?: string;
    searchDbBookmarksTitle?: string;
    searchDbBookmarksUrl?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBookmarksRequest extends SpeakeasyBase {
    queryParams: SearchBookmarksQueryParams;
}
export declare class SearchBookmarksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
