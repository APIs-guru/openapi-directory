import { SpeakeasyBase } from "../../../internal/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";
export declare class GenerateDataKeyPairWithoutPlaintextResponse extends SpeakeasyBase {
    keyId?: string;
    keyPairSpec?: DataKeyPairSpecEnum;
    privateKeyCiphertextBlob?: string;
    publicKey?: string;
}
