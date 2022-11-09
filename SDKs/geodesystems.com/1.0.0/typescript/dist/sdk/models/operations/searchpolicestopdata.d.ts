import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchPoliceStopDataQueryParams extends SpeakeasyBase {
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
    searchDbPoliceStopDataAddress?: string;
    searchDbPoliceStopDataDate?: string;
    searchDbPoliceStopDataEthnicity?: string;
    searchDbPoliceStopDataMinutes?: number;
    searchDbPoliceStopDataRace?: string;
    searchDbPoliceStopDataResident?: string;
    searchDbPoliceStopDataSex?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchPoliceStopDataRequest extends SpeakeasyBase {
    queryParams: SearchPoliceStopDataQueryParams;
}
export declare class SearchPoliceStopDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
