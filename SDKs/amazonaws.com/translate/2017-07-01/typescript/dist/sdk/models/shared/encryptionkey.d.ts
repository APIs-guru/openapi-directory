import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKeyTypeEnum } from "./encryptionkeytypeenum";
/**
 * The encryption key used to encrypt this object.
**/
export declare class EncryptionKey extends SpeakeasyBase {
    id: string;
    type: EncryptionKeyTypeEnum;
}
