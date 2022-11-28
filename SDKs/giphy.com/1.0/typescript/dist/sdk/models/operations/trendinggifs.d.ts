import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrendingGifsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    rating?: string;
}
export declare class TrendingGifs200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif[];
    meta?: shared.Meta;
    pagination?: shared.Pagination;
}
export declare class TrendingGifsRequest extends SpeakeasyBase {
    queryParams: TrendingGifsQueryParams;
}
export declare class TrendingGifsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trendingGifs200ApplicationJsonObject?: TrendingGifs200ApplicationJson;
}
