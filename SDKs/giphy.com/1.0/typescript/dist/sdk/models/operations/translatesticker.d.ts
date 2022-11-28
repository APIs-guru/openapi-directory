import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateStickerQueryParams extends SpeakeasyBase {
    s: string;
}
export declare class TranslateSticker200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif;
    meta?: shared.Meta;
}
export declare class TranslateStickerRequest extends SpeakeasyBase {
    queryParams: TranslateStickerQueryParams;
}
export declare class TranslateStickerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translateSticker200ApplicationJsonObject?: TranslateSticker200ApplicationJson;
}
