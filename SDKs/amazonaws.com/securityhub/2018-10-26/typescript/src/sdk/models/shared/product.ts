import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegrationTypeEnum } from "./integrationtypeenum";



// Product
/** 
 * Contains details about a product.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationUrl" })
  activationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationTypes" })
  integrationTypes?: IntegrationTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MarketplaceUrl" })
  marketplaceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductArn" })
  productArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSubscriptionResourcePolicy" })
  productSubscriptionResourcePolicy?: string;
}
