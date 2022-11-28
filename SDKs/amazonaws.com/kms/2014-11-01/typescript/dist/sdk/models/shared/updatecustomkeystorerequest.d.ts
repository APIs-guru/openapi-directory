import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
    cloudHsmClusterId?: string;
    customKeyStoreId: string;
    keyStorePassword?: string;
    newCustomKeyStoreName?: string;
}
