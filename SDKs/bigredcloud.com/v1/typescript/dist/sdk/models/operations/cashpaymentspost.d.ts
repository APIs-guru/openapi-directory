import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashPaymentsPostRequest extends SpeakeasyBase {
    request: shared.CashPaymentDto;
}
export declare class CashPaymentsPostResponse extends SpeakeasyBase {
    cashPaymentsPost200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
