import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";
export declare class GetKeyPairsResult extends SpeakeasyBase {
    keyPairs?: KeyPair[];
    nextPageToken?: string;
}
