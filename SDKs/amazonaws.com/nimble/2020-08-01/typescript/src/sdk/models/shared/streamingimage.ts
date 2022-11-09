import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingImageEncryptionConfiguration } from "./streamingimageencryptionconfiguration";
import { StreamingImageStateEnum } from "./streamingimagestateenum";
import { StreamingImageStatusCodeEnum } from "./streamingimagestatuscodeenum";


export class StreamingImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ec2ImageId" })
  ec2ImageId?: string;

  @Metadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: StreamingImageEncryptionConfiguration;

  @Metadata({ data: "json, name=eulaIds" })
  eulaIds?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: string;

  @Metadata({ data: "json, name=state" })
  state?: StreamingImageStateEnum;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: StreamingImageStatusCodeEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=streamingImageId" })
  streamingImageId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
