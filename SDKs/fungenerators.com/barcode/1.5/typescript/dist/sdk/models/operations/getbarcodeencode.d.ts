import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBarcodeEncodeQueryParams extends SpeakeasyBase {
    barcodeformat?: string;
    number: string;
    outputformat?: string;
    totalheight?: number;
    widthfactor?: number;
}
export declare class GetBarcodeEncodeSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetBarcodeEncodeRequest extends SpeakeasyBase {
    queryParams: GetBarcodeEncodeQueryParams;
    security: GetBarcodeEncodeSecurity;
}
export declare class GetBarcodeEncodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
