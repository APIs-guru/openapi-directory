import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PaymentsPutRequest extends SpeakeasyBase {
    pathParams: PaymentsPutPathParams;
    request: shared.PaymentDto;
}
export declare class PaymentsPutResponse extends SpeakeasyBase {
    contentType: string;
    paymentsPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
