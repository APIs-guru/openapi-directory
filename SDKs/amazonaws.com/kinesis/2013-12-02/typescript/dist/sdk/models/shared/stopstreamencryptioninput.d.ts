import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
export declare class StopStreamEncryptionInput extends SpeakeasyBase {
    encryptionType: EncryptionTypeEnum;
    keyId: string;
    streamName: string;
}
