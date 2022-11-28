import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageStatusEnum } from "./imagestatusenum";



export class DescribeImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageStatus" })
  imageStatus?: ImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
