import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBarcodeDecodeRequestBody extends SpeakeasyBase {
    barimage: Uint8Array;
}
export declare class PostBarcodeDecodeSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class PostBarcodeDecodeRequest extends SpeakeasyBase {
    request?: PostBarcodeDecodeRequestBody;
    security: PostBarcodeDecodeSecurity;
}
export declare class PostBarcodeDecodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
