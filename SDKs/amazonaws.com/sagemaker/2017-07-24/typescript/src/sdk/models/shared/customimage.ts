import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomImage
/** 
 * A custom SageMaker image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
**/
export class CustomImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;

  @SpeakeasyMetadata({ data: "json, name=ImageVersionNumber" })
  imageVersionNumber?: number;
}
