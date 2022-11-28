import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsTransactionHashPathParams extends SpeakeasyBase {
    hash: string;
}
export declare class OptionsTransactionHashRequest extends SpeakeasyBase {
    pathParams: OptionsTransactionHashPathParams;
}
export declare class OptionsTransactionHashResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
