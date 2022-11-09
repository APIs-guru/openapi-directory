import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageVersionStatusEnum } from "./imageversionstatusenum";


export class DescribeImageVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseImage" })
  baseImage?: string;

  @Metadata({ data: "json, name=ContainerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @Metadata({ data: "json, name=ImageVersionArn" })
  imageVersionArn?: string;

  @Metadata({ data: "json, name=ImageVersionStatus" })
  imageVersionStatus?: ImageVersionStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
