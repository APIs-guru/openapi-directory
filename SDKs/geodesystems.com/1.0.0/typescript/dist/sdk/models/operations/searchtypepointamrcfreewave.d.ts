import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointAmrcFreewaveQueryParams extends SpeakeasyBase {
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
    searchTypePointAmrcFreewaveDataloggerModel?: string;
    searchTypePointAmrcFreewaveDataloggerSerial?: string;
    searchTypePointAmrcFreewaveFormat?: string;
    searchTypePointAmrcFreewaveStationName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointAmrcFreewaveRequest extends SpeakeasyBase {
    queryParams: SearchTypePointAmrcFreewaveQueryParams;
}
export declare class SearchTypePointAmrcFreewaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
