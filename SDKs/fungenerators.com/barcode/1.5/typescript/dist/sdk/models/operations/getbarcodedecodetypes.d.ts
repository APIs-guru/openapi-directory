import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBarcodeDecodeTypesSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetBarcodeDecodeTypesRequest extends SpeakeasyBase {
    security: GetBarcodeDecodeTypesSecurity;
}
export declare class GetBarcodeDecodeTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
