import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
export declare class StartStreamEncryptionInput extends SpeakeasyBase {
    encryptionType: EncryptionTypeEnum;
    keyId: string;
    streamName: string;
}
