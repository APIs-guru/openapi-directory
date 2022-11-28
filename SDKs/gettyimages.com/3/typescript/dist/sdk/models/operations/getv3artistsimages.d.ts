import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3ArtistsImagesQueryParams extends SpeakeasyBase {
    artistName?: string;
    fields?: shared.ArtistsImageSearchFieldValuesEnum[];
    page?: number;
    pageSize?: number;
}
export declare class GetV3ArtistsImagesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ArtistsImagesRequest extends SpeakeasyBase {
    queryParams: GetV3ArtistsImagesQueryParams;
    headers: GetV3ArtistsImagesHeaders;
}
export declare class GetV3ArtistsImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
