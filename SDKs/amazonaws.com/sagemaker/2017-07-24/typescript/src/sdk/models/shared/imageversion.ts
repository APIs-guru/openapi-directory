import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageVersionStatusEnum } from "./imageversionstatusenum";



// ImageVersion
/** 
 * A version of a SageMaker <code>Image</code>. A version represents an existing container image.
**/
export class ImageVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn: string;

  @SpeakeasyMetadata({ data: "json, name=ImageVersionArn" })
  imageVersionArn: string;

  @SpeakeasyMetadata({ data: "json, name=ImageVersionStatus" })
  imageVersionStatus: ImageVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: number;
}
