import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingImageEncryptionConfigurationKeyTypeEnum } from "./streamingimageencryptionconfigurationkeytypeenum";



export class StreamingImageEncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyArn" })
  keyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=keyType" })
  keyType: StreamingImageEncryptionConfigurationKeyTypeEnum;
}
