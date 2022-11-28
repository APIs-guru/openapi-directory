import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsPostRequest extends SpeakeasyBase {
    request: shared.PaymentDto;
}
export declare class PaymentsPostResponse extends SpeakeasyBase {
    contentType: string;
    paymentsPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
