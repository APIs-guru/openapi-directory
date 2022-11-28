import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImagesGetScanImagesPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class ImagesGetScanImagesRequest extends SpeakeasyBase {
    pathParams: ImagesGetScanImagesPathParams;
}
export declare class ImagesGetScanImagesResponse extends SpeakeasyBase {
    bigOvenModelApiImages?: shared.BigOvenModelApiImage[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
