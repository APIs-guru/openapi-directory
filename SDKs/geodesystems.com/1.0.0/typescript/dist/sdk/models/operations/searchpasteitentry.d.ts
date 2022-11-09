import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchPasteitentryQueryParams extends SpeakeasyBase {
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
export declare class SearchPasteitentryRequest extends SpeakeasyBase {
    queryParams: SearchPasteitentryQueryParams;
}
export declare class SearchPasteitentryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
