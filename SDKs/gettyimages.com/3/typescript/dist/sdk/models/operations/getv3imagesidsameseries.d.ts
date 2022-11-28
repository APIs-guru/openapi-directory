import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3ImagesIdSameSeriesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3ImagesIdSameSeriesQueryParams extends SpeakeasyBase {
    fields?: shared.ImagesFieldValuesEnum[];
    page?: number;
    pageSize?: number;
}
export declare class GetV3ImagesIdSameSeriesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ImagesIdSameSeriesRequest extends SpeakeasyBase {
    pathParams: GetV3ImagesIdSameSeriesPathParams;
    queryParams: GetV3ImagesIdSameSeriesQueryParams;
    headers: GetV3ImagesIdSameSeriesHeaders;
}
export declare class GetV3ImagesIdSameSeriesResponse extends SpeakeasyBase {
    contentType: string;
    imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;
    statusCode: number;
}
