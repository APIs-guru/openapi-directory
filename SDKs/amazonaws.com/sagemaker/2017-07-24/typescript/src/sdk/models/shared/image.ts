import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageStatusEnum } from "./imagestatusenum";


// Image
/** 
 * A SageMaker image. A SageMaker image represents a set of container images that are derived from a common base container image. Each of these container images is represented by a SageMaker <code>ImageVersion</code>.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=ImageArn" })
  imageArn: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName: string;

  @Metadata({ data: "json, name=ImageStatus" })
  imageStatus: ImageStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;
}
