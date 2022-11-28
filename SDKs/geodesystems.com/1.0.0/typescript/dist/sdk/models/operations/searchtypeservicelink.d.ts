import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeServiceLinkQueryParams extends SpeakeasyBase {
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
export declare class SearchTypeServiceLinkRequest extends SpeakeasyBase {
    queryParams: SearchTypeServiceLinkQueryParams;
}
export declare class SearchTypeServiceLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
