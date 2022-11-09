import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceCatalogProvisionedProductDetails
/** 
 * Details of a provisioned service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
**/
export class ServiceCatalogProvisionedProductDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductStatusMessage" })
  provisionedProductStatusMessage?: string;
}
