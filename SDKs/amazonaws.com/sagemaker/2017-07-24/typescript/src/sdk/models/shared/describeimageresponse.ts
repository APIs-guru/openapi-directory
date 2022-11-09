import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageStatusEnum } from "./imagestatusenum";


export class DescribeImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName?: string;

  @Metadata({ data: "json, name=ImageStatus" })
  imageStatus?: ImageStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
