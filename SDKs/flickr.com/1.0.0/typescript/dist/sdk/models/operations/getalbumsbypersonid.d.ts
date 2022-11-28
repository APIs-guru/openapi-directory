import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumsByPersonIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    page?: number;
    perPage?: number;
    userId: string;
}
export declare class GetAlbumsByPersonId200ApplicationJson extends SpeakeasyBase {
    page?: number;
    pages?: number;
    perpage?: number;
    photosets?: shared.Album[];
    total?: number;
}
export declare class GetAlbumsByPersonIdRequest extends SpeakeasyBase {
    queryParams: GetAlbumsByPersonIdQueryParams;
}
export declare class GetAlbumsByPersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAlbumsByPersonId200ApplicationJsonObject?: GetAlbumsByPersonId200ApplicationJson;
}
