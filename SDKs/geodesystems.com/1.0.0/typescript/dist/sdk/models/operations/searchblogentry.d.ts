import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchBlogentryQueryParams extends SpeakeasyBase {
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
    searchBlogentryBlogtext?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBlogentryRequest extends SpeakeasyBase {
    queryParams: SearchBlogentryQueryParams;
}
export declare class SearchBlogentryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
