import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionStatusEnum } from "./encryptionstatusenum";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * A configuration document that specifies encryption configuration settings.
**/
export declare class EncryptionConfig extends SpeakeasyBase {
    keyId?: string;
    status?: EncryptionStatusEnum;
    type?: EncryptionTypeEnum;
}
