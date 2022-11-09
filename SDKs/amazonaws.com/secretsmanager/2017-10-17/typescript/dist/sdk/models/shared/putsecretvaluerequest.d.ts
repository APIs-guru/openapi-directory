import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutSecretValueRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    secretBinary?: string;
    secretId: string;
    secretString?: string;
    versionStages?: string[];
}
