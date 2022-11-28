import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingImageEncryptionConfiguration } from "./streamingimageencryptionconfiguration";
import { StreamingImageStateEnum } from "./streamingimagestateenum";
import { StreamingImageStatusCodeEnum } from "./streamingimagestatuscodeenum";



export class StreamingImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2ImageId" })
  ec2ImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: StreamingImageEncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=eulaIds" })
  eulaIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StreamingImageStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: StreamingImageStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingImageId" })
  streamingImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
