import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImagesGetPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class ImagesGetRequest extends SpeakeasyBase {
    pathParams: ImagesGetPathParams;
}
export declare class ImagesGetResponse extends SpeakeasyBase {
    bigOvenModelApiImages?: shared.BigOvenModelApiImage[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
