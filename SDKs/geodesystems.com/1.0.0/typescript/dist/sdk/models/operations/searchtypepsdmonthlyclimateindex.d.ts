import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePsdMonthlyClimateIndexQueryParams extends SpeakeasyBase {
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
    searchTypePsdMonthlyClimateIndexUnits?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePsdMonthlyClimateIndexRequest extends SpeakeasyBase {
    queryParams: SearchTypePsdMonthlyClimateIndexQueryParams;
}
export declare class SearchTypePsdMonthlyClimateIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
