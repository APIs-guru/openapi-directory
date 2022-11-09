import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


export class DescribeDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationStatus" })
  configurationStatus: ConfigurationStatus;

  @Metadata({ data: "json, name=encryptionType" })
  encryptionType: EncryptionTypeEnum;

  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;
}
