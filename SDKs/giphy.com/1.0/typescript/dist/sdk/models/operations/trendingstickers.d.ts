import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrendingStickersQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    rating?: string;
}
export declare class TrendingStickers200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif[];
    meta?: shared.Meta;
    pagination?: shared.Pagination;
}
export declare class TrendingStickersRequest extends SpeakeasyBase {
    queryParams: TrendingStickersQueryParams;
}
export declare class TrendingStickersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trendingStickers200ApplicationJsonObject?: TrendingStickers200ApplicationJson;
}
