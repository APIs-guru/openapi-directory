import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateGifQueryParams extends SpeakeasyBase {
    s: string;
}
export declare class TranslateGif200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif;
    meta?: shared.Meta;
}
export declare class TranslateGifRequest extends SpeakeasyBase {
    queryParams: TranslateGifQueryParams;
}
export declare class TranslateGifResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translateGif200ApplicationJsonObject?: TranslateGif200ApplicationJson;
}
