import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningParameter } from "./provisioningparameter";



// ServiceCatalogProvisioningDetails
/** 
 * Details that you specify to provision a service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
**/
export class ServiceCatalogProvisioningDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: ProvisioningParameter })
  provisioningParameters?: ProvisioningParameter[];
}
