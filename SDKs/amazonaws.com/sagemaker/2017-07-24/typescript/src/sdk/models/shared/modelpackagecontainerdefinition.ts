import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelPackageContainerDefinition
/** 
 * Describes the Docker container for the model package.
**/
export class ModelPackageContainerDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerHostname" })
  containerHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=ImageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;
}
