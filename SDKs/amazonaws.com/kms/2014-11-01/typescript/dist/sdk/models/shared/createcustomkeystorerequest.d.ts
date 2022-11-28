import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCustomKeyStoreRequest extends SpeakeasyBase {
    cloudHsmClusterId: string;
    customKeyStoreName: string;
    keyStorePassword: string;
    trustAnchorCertificate: string;
}
