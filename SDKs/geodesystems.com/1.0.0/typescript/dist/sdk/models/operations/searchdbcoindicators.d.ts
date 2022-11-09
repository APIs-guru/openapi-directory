import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchDbCoIndicatorsQueryParams extends SpeakeasyBase {
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
    searchDbDbCoIndicatorsDescription?: string;
    searchDbDbCoIndicatorsDomain?: string;
    searchDbDbCoIndicatorsGeoName?: string;
    searchDbDbCoIndicatorsIndicatorName?: string;
    searchDbDbCoIndicatorsLocation?: string;
    searchDbDbCoIndicatorsMeasure?: number;
    searchDbDbCoIndicatorsSubdomain?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchDbCoIndicatorsRequest extends SpeakeasyBase {
    queryParams: SearchDbCoIndicatorsQueryParams;
}
export declare class SearchDbCoIndicatorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
