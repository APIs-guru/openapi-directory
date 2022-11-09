import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3ArtistsVideosQueryParams extends SpeakeasyBase {
    artistName?: string;
    fields?: shared.ArtistsVideoSearchFieldValuesEnum[];
    page?: number;
    pageSize?: number;
}
export declare class GetV3ArtistsVideosHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ArtistsVideosRequest extends SpeakeasyBase {
    queryParams: GetV3ArtistsVideosQueryParams;
    headers: GetV3ArtistsVideosHeaders;
}
export declare class GetV3ArtistsVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
