import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelPackageContainerDefinition
/** 
 * Describes the Docker container for the model package.
**/
export class ModelPackageContainerDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerHostname" })
  containerHostname?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=Image" })
  image: string;

  @Metadata({ data: "json, name=ImageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;
}
