import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
