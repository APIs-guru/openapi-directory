import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBarcodeEncodeTypesSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetBarcodeEncodeTypesRequest extends SpeakeasyBase {
    security: GetBarcodeEncodeTypesSecurity;
}
export declare class GetBarcodeEncodeTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
