import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateSecretRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    description?: string;
    kmsKeyId?: string;
    secretBinary?: string;
    secretId: string;
    secretString?: string;
}
