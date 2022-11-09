import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsWalletAccountIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsWalletAccountIdRequest extends SpeakeasyBase {
    pathParams: OptionsWalletAccountIdPathParams;
}
export declare class OptionsWalletAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
