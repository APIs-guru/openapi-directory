import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";
import { Operation } from "./operation";
export declare class CreateKeyPairResult extends SpeakeasyBase {
    keyPair?: KeyPair;
    operation?: Operation;
    privateKeyBase64?: string;
    publicKeyBase64?: string;
}
