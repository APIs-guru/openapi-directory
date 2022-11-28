import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchUsPlacesQueryParams extends SpeakeasyBase {
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
    searchDbUsPlacesCountyName?: string;
    searchDbUsPlacesElevInFt?: number;
    searchDbUsPlacesFeatureClass?: string;
    searchDbUsPlacesFeatureName?: string;
    searchDbUsPlacesLocation?: string;
    searchDbUsPlacesStateAlpha?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchUsPlacesRequest extends SpeakeasyBase {
    queryParams: SearchUsPlacesQueryParams;
}
export declare class SearchUsPlacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
