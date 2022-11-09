import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomImage
/** 
 * A custom SageMaker image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
**/
export class CustomImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName: string;

  @Metadata({ data: "json, name=ImageVersionNumber" })
  imageVersionNumber?: number;
}
