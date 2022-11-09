import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsBlockIdTransactionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsBlockIdTransactionRequest extends SpeakeasyBase {
    pathParams: OptionsBlockIdTransactionPathParams;
}
export declare class OptionsBlockIdTransactionResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
