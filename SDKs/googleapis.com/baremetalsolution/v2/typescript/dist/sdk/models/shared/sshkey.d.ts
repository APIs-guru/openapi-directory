import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
export declare class SshKeyInput extends SpeakeasyBase {
    publicKey?: string;
}
/**
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
export declare class SshKey extends SpeakeasyBase {
    name?: string;
    publicKey?: string;
}
