import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3VideosIdSimilarPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3VideosIdSimilarQueryParams extends SpeakeasyBase {
    fields?: shared.BlendedVideosFieldValuesEnum[];
    page?: number;
    pageSize?: number;
}
export declare class GetV3VideosIdSimilarHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3VideosIdSimilarRequest extends SpeakeasyBase {
    pathParams: GetV3VideosIdSimilarPathParams;
    queryParams: GetV3VideosIdSimilarQueryParams;
    headers: GetV3VideosIdSimilarHeaders;
}
export declare class GetV3VideosIdSimilarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
