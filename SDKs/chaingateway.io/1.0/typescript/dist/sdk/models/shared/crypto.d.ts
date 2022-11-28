import { SpeakeasyBase } from "../../../internal/utils";
import { Cipherparams } from "./cipherparams";
import { Kdfparams } from "./kdfparams";
export declare class Crypto extends SpeakeasyBase {
    cipher: string;
    cipherparams: Cipherparams;
    ciphertext: string;
    kdf: string;
    kdfparams: Kdfparams;
    mac: string;
}
