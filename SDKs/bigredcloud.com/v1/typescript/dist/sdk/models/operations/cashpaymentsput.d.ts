import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashPaymentsPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CashPaymentsPutRequest extends SpeakeasyBase {
    pathParams: CashPaymentsPutPathParams;
    request: shared.CashPaymentDto;
}
export declare class CashPaymentsPutResponse extends SpeakeasyBase {
    cashPaymentsPut200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
