import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RandomGifQueryParams extends SpeakeasyBase {
    rating?: string;
    tag?: string;
}
export declare class RandomGif200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif;
    meta?: shared.Meta;
}
export declare class RandomGifRequest extends SpeakeasyBase {
    queryParams: RandomGifQueryParams;
}
export declare class RandomGifResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    randomGif200ApplicationJsonObject?: RandomGif200ApplicationJson;
}
