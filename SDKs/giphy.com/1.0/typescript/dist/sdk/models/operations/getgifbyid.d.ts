import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGifByIdPathParams extends SpeakeasyBase {
    gifId: number;
}
export declare class GetGifById200ApplicationJson extends SpeakeasyBase {
    data?: shared.Gif;
    meta?: shared.Meta;
}
export declare class GetGifByIdRequest extends SpeakeasyBase {
    pathParams: GetGifByIdPathParams;
}
export declare class GetGifByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGifById200ApplicationJsonObject?: GetGifById200ApplicationJson;
}
