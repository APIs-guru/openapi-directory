import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeBlsSeriesQueryParams extends SpeakeasyBase {
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
    searchTypeBlsSeriesArea?: string;
    searchTypeBlsSeriesIndustry?: string;
    searchTypeBlsSeriesItem?: string;
    searchTypeBlsSeriesMeasureDataType?: string;
    searchTypeBlsSeriesSeasonality?: string;
    searchTypeBlsSeriesSector?: string;
    searchTypeBlsSeriesSurveyName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeBlsSeriesRequest extends SpeakeasyBase {
    queryParams: SearchTypeBlsSeriesQueryParams;
}
export declare class SearchTypeBlsSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
