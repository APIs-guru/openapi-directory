import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";
export declare class ExpiredCert extends SpeakeasyBase {
    fileHash?: string;
    fileName?: string;
    publicKey?: PublicKey;
    subjectName?: string;
    thumbPrint?: string;
    validFrom?: string;
    validTo?: string;
}
