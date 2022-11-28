import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
