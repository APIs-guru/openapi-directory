import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFavoritesContextByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
    userId?: string;
}
export declare class GetFavoritesContextById200ApplicationJsonCount extends SpeakeasyBase {
    content?: string;
}
export declare class GetFavoritesContextById200ApplicationJson extends SpeakeasyBase {
    count?: GetFavoritesContextById200ApplicationJsonCount;
    nextphoto?: shared.ContextPhoto;
    prevphoto?: shared.ContextPhoto;
    stat?: string;
}
export declare class GetFavoritesContextByIdRequest extends SpeakeasyBase {
    queryParams: GetFavoritesContextByIdQueryParams;
}
export declare class GetFavoritesContextByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFavoritesContextById200ApplicationJsonObject?: GetFavoritesContextById200ApplicationJson;
}
