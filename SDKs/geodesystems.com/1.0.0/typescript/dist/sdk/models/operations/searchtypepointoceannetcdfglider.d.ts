import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointOceanNetcdfGliderQueryParams extends SpeakeasyBase {
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
    searchTypePointOceanNetcdfTrackPlatform?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointOceanNetcdfGliderRequest extends SpeakeasyBase {
    queryParams: SearchTypePointOceanNetcdfGliderQueryParams;
}
export declare class SearchTypePointOceanNetcdfGliderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
