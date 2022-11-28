import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * Represents the output for <code>PutRecord</code>.
**/
export declare class PutRecordOutput extends SpeakeasyBase {
    encryptionType?: EncryptionTypeEnum;
    sequenceNumber: string;
    shardId: string;
}
