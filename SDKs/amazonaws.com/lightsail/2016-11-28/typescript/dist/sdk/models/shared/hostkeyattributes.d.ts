import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the public SSH host keys or the RDP certificate.
**/
export declare class HostKeyAttributes extends SpeakeasyBase {
    algorithm?: string;
    fingerprintSha1?: string;
    fingerprintSha256?: string;
    notValidAfter?: Date;
    notValidBefore?: Date;
    publicKey?: string;
    witnessedAt?: Date;
}
