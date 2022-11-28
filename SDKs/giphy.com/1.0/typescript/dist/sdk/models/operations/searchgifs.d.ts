import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchGifsQueryParams extends SpeakeasyBase {
    lang?: string;
    limit?: number;
    offset?: number;
    q: string;
    rating?: string;
}
export declare class SearchGifs200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif[];
    meta?: shared.Meta;
    pagination?: shared.Pagination;
}
export declare class SearchGifsRequest extends SpeakeasyBase {
    queryParams: SearchGifsQueryParams;
}
export declare class SearchGifsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchGifs200ApplicationJsonObject?: SearchGifs200ApplicationJson;
}
