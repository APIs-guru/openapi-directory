import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchLocationsQueryParams extends SpeakeasyBase {
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
    searchDbLocationsLocation?: string;
    searchDbLocationsName?: string;
    searchDbLocationsType?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchLocationsRequest extends SpeakeasyBase {
    queryParams: SearchLocationsQueryParams;
}
export declare class SearchLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
