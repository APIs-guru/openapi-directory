import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageVersionStatusEnum } from "./imageversionstatusenum";


// ImageVersion
/** 
 * A version of a SageMaker <code>Image</code>. A version represents an existing container image.
**/
export class ImageVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=ImageArn" })
  imageArn: string;

  @Metadata({ data: "json, name=ImageVersionArn" })
  imageVersionArn: string;

  @Metadata({ data: "json, name=ImageVersionStatus" })
  imageVersionStatus: ImageVersionStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=Version" })
  version: number;
}
