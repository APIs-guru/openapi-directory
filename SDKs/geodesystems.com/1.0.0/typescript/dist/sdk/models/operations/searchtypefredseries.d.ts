import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypeFredSeriesQueryParams extends SpeakeasyBase {
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
export declare class SearchTypeFredSeriesRequest extends SpeakeasyBase {
    queryParams: SearchTypeFredSeriesQueryParams;
}
export declare class SearchTypeFredSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
