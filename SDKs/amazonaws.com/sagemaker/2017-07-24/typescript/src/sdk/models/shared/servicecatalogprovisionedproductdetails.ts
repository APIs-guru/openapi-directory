import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceCatalogProvisionedProductDetails
/** 
 * Details of a provisioned service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
**/
export class ServiceCatalogProvisionedProductDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductStatusMessage" })
  provisionedProductStatusMessage?: string;
}
