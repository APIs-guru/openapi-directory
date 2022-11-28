import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeExtremesQueryParams extends SpeakeasyBase {
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
    searchTypeExtremesRegion?: string;
    searchTypeExtremesVariable?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeExtremesRequest extends SpeakeasyBase {
    queryParams: SearchTypeExtremesQueryParams;
}
export declare class SearchTypeExtremesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
