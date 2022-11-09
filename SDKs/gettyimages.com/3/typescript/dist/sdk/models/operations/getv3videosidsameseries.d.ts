import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3VideosIdSameSeriesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3VideosIdSameSeriesQueryParams extends SpeakeasyBase {
    fields?: shared.BlendedVideosFieldValuesEnum[];
    page?: number;
    pageSize?: number;
}
export declare class GetV3VideosIdSameSeriesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3VideosIdSameSeriesRequest extends SpeakeasyBase {
    pathParams: GetV3VideosIdSameSeriesPathParams;
    queryParams: GetV3VideosIdSameSeriesQueryParams;
    headers: GetV3VideosIdSameSeriesHeaders;
}
export declare class GetV3VideosIdSameSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
