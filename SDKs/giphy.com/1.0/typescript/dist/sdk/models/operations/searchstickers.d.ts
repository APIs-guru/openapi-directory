import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchStickersQueryParams extends SpeakeasyBase {
    lang?: string;
    limit?: number;
    offset?: number;
    q: string;
    rating?: string;
}
export declare class SearchStickers200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif[];
    meta?: shared.Meta;
    pagination?: shared.Pagination;
}
export declare class SearchStickersRequest extends SpeakeasyBase {
    queryParams: SearchStickersQueryParams;
}
export declare class SearchStickersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchStickers200ApplicationJsonObject?: SearchStickers200ApplicationJson;
}
