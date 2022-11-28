import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SrcSearchlyApiV1ControllersSongSearchQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class SrcSearchlyApiV1ControllersSongSearchRequest extends SpeakeasyBase {
    queryParams: SrcSearchlyApiV1ControllersSongSearchQueryParams;
}
export declare class SrcSearchlyApiV1ControllersSongSearchResponse extends SpeakeasyBase {
    apiResponseSong?: shared.ApiResponseSong;
    contentType: string;
    statusCode: number;
    srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString?: string;
}
