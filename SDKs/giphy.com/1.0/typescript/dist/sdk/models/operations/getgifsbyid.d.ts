import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGifsByIdQueryParams extends SpeakeasyBase {
    ids?: string;
}
export declare class GetGifsById200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif[];
    meta?: shared.Meta;
    pagination?: shared.Pagination;
}
export declare class GetGifsByIdRequest extends SpeakeasyBase {
    queryParams: GetGifsByIdQueryParams;
}
export declare class GetGifsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGifsById200ApplicationJsonObject?: GetGifsById200ApplicationJson;
}
