import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchEarthSatelliteLandsatQueryParams extends SpeakeasyBase {
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
    searchEarthSatelliteLandsatArchiveVersionNumber?: number;
    searchEarthSatelliteLandsatGroundStation?: string;
    searchEarthSatelliteLandsatSatellite?: string;
    searchEarthSatelliteLandsatSensor?: string;
    searchEarthSatelliteLandsatWrsPathNumber?: number;
    searchEarthSatelliteLandsatWrsRowNumber?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchEarthSatelliteLandsatRequest extends SpeakeasyBase {
    queryParams: SearchEarthSatelliteLandsatQueryParams;
}
export declare class SearchEarthSatelliteLandsatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
