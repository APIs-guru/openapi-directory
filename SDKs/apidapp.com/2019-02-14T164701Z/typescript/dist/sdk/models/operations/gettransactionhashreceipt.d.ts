import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionHashReceiptPathParams extends SpeakeasyBase {
    hash: string;
}
export declare class GetTransactionHashReceiptSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetTransactionHashReceiptRequest extends SpeakeasyBase {
    pathParams: GetTransactionHashReceiptPathParams;
    security: GetTransactionHashReceiptSecurity;
}
export declare class GetTransactionHashReceiptResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
