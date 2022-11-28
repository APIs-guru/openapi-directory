import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashReceiptsPostRequest extends SpeakeasyBase {
    request: shared.CashReceiptDto;
}
export declare class CashReceiptsPostResponse extends SpeakeasyBase {
    cashReceiptsPost200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
