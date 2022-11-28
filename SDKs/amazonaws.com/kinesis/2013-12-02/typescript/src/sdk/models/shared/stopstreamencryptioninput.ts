import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



export class StopStreamEncryptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
