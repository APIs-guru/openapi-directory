import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointPboPositionTimeSeriesQueryParams extends SpeakeasyBase {
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
    searchTypePointPboPositionTimeSeriesFormatVersion?: string;
    searchTypePointPboPositionTimeSeriesFourCharId?: string;
    searchTypePointPboPositionTimeSeriesProcessingCenter?: string;
    searchTypePointPboPositionTimeSeriesReferenceFrame?: string;
    searchTypePointPboPositionTimeSeriesStationName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointPboPositionTimeSeriesRequest extends SpeakeasyBase {
    queryParams: SearchTypePointPboPositionTimeSeriesQueryParams;
}
export declare class SearchTypePointPboPositionTimeSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
