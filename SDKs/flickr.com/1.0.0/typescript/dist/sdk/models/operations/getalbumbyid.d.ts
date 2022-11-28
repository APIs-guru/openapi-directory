import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photosetId: string;
}
export declare class GetAlbumById200ApplicationJson extends SpeakeasyBase {
    photoset?: shared.Photo[];
}
export declare class GetAlbumByIdRequest extends SpeakeasyBase {
    queryParams: GetAlbumByIdQueryParams;
}
export declare class GetAlbumByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAlbumById200ApplicationJsonObject?: GetAlbumById200ApplicationJson;
}
