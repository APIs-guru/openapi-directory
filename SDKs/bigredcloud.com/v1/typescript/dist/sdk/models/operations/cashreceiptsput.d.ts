import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashReceiptsPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CashReceiptsPutRequest extends SpeakeasyBase {
    pathParams: CashReceiptsPutPathParams;
    request: shared.CashReceiptDto;
}
export declare class CashReceiptsPutResponse extends SpeakeasyBase {
    cashReceiptsPut200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
