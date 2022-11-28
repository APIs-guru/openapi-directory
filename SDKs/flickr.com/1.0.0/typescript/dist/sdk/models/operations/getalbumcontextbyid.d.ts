import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumContextByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
    photosetId?: string;
}
export declare class GetAlbumContextById200ApplicationJsonCount extends SpeakeasyBase {
    content?: string;
}
export declare class GetAlbumContextById200ApplicationJson extends SpeakeasyBase {
    count?: GetAlbumContextById200ApplicationJsonCount;
    nextphoto?: shared.ContextPhoto;
    prevphoto?: shared.ContextPhoto;
    stat?: string;
}
export declare class GetAlbumContextByIdRequest extends SpeakeasyBase {
    queryParams: GetAlbumContextByIdQueryParams;
}
export declare class GetAlbumContextByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAlbumContextById200ApplicationJsonObject?: GetAlbumContextById200ApplicationJson;
}
