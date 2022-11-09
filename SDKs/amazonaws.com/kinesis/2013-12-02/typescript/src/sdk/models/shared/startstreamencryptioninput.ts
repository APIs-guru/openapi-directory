import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


export class StartStreamEncryptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType: EncryptionTypeEnum;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
