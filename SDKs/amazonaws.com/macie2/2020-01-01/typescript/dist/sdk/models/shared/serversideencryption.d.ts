import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * Provides information about the server-side encryption settings for an S3 bucket or S3 object.
**/
export declare class ServerSideEncryption extends SpeakeasyBase {
    encryptionType?: EncryptionTypeEnum;
    kmsMasterKeyId?: string;
}
