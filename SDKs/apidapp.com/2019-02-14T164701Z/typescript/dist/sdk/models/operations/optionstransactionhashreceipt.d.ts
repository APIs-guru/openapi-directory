import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsTransactionHashReceiptPathParams extends SpeakeasyBase {
    hash: string;
}
export declare class OptionsTransactionHashReceiptRequest extends SpeakeasyBase {
    pathParams: OptionsTransactionHashReceiptPathParams;
}
export declare class OptionsTransactionHashReceiptResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
