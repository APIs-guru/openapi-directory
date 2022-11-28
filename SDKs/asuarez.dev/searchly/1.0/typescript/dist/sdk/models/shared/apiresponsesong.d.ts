import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Song item.
**/
export declare class ApiResponseSongResponseResults extends SpeakeasyBase {
    id?: number;
    name?: string;
}
/**
 * Contains the response data if the request was successful.
**/
export declare class ApiResponseSongResponse extends SpeakeasyBase {
    results?: ApiResponseSongResponseResults[];
}
export declare class ApiResponseSong extends SpeakeasyBase {
    error?: boolean;
    message?: string;
    response?: ApiResponseSongResponse;
}
