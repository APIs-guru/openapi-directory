import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsWalletAccountIdPayPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsWalletAccountIdPayRequest extends SpeakeasyBase {
    pathParams: OptionsWalletAccountIdPayPathParams;
}
export declare class OptionsWalletAccountIdPayResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
