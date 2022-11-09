import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingImageEncryptionConfigurationKeyTypeEnum } from "./streamingimageencryptionconfigurationkeytypeenum";


export class StreamingImageEncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyArn" })
  keyArn?: string;

  @Metadata({ data: "json, name=keyType" })
  keyType: StreamingImageEncryptionConfigurationKeyTypeEnum;
}
