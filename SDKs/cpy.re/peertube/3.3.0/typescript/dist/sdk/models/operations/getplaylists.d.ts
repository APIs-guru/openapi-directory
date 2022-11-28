import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPlaylistsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetPlaylists200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    queryParams: GetPlaylistsQueryParams;
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPlaylists200ApplicationJsonObject?: GetPlaylists200ApplicationJson;
}
