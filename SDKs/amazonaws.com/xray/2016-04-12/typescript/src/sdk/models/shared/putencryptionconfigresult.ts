import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfig } from "./encryptionconfig";


export class PutEncryptionConfigResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;
}
