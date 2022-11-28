import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RandomStickerQueryParams extends SpeakeasyBase {
    rating?: string;
    tag?: string;
}
export declare class RandomSticker200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif;
    meta?: shared.Meta;
}
export declare class RandomStickerRequest extends SpeakeasyBase {
    queryParams: RandomStickerQueryParams;
}
export declare class RandomStickerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    randomSticker200ApplicationJsonObject?: RandomSticker200ApplicationJson;
}
