import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningParameter } from "./provisioningparameter";


// ServiceCatalogProvisioningDetails
/** 
 * Details that you specify to provision a service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
**/
export class ServiceCatalogProvisioningDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=PathId" })
  pathId?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @Metadata({ data: "json, name=ProvisioningParameters", elemType: shared.ProvisioningParameter })
  provisioningParameters?: ProvisioningParameter[];
}
