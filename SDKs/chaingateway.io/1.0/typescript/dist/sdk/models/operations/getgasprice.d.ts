import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGasPriceHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class GetGasPriceRequest extends SpeakeasyBase {
    headers: GetGasPriceHeaders;
}
export declare class GetGasPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGasPrice?: shared.GetGasPrice;
}
