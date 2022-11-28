import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchGeoHdf5QueryParams extends SpeakeasyBase {
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
export declare class SearchGeoHdf5Request extends SpeakeasyBase {
    queryParams: SearchGeoHdf5QueryParams;
}
export declare class SearchGeoHdf5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
