import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";



export class PutEncryptionConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;
}
