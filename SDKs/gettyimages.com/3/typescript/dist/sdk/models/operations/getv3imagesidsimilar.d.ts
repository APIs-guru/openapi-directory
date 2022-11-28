import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3ImagesIdSimilarPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3ImagesIdSimilarQueryParams extends SpeakeasyBase {
    fields?: shared.ImagesFieldValuesEnum[];
    page?: number;
    pageSize?: number;
}
export declare class GetV3ImagesIdSimilarHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ImagesIdSimilarRequest extends SpeakeasyBase {
    pathParams: GetV3ImagesIdSimilarPathParams;
    queryParams: GetV3ImagesIdSimilarQueryParams;
    headers: GetV3ImagesIdSimilarHeaders;
}
export declare class GetV3ImagesIdSimilarResponse extends SpeakeasyBase {
    contentType: string;
    imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;
    statusCode: number;
}
