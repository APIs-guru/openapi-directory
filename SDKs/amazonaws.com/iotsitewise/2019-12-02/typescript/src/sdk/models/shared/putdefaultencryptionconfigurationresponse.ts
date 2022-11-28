import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



export class PutDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationStatus" })
  configurationStatus: ConfigurationStatus;

  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;
}
