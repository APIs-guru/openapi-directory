import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentApiSupportedHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentApiSupportedRequest extends SpeakeasyBase {
    headers: PaymentApiSupportedHeaders;
}
export declare class PaymentApiSupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    paymentGatewayDetailsApiModels?: shared.PaymentGatewayDetailsApiModel[];
    statusCode: number;
}
