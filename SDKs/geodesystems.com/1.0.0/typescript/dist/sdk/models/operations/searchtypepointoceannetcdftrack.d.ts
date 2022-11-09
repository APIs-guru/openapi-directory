import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointOceanNetcdfTrackQueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointOceanNetcdfTrackRequest extends SpeakeasyBase {
    queryParams: SearchTypePointOceanNetcdfTrackQueryParams;
}
export declare class SearchTypePointOceanNetcdfTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
