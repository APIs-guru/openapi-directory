import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchGeoGpxQueryParams extends SpeakeasyBase {
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
    searchGeoGpxDistance?: number;
    searchGeoGpxElevationGain?: number;
    searchGeoGpxElevationLoss?: number;
    searchGeoGpxMovingTime?: number;
    searchGeoGpxSpeed?: number;
    searchGeoGpxTotalTime?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchGeoGpxRequest extends SpeakeasyBase {
    queryParams: SearchGeoGpxQueryParams;
}
export declare class SearchGeoGpxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
