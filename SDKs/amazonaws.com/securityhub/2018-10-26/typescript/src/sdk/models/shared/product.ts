import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IntegrationTypeEnum } from "./integrationtypeenum";


// Product
/** 
 * Contains details about a product.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationUrl" })
  activationUrl?: string;

  @Metadata({ data: "json, name=Categories" })
  categories?: string[];

  @Metadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IntegrationTypes" })
  integrationTypes?: IntegrationTypeEnum[];

  @Metadata({ data: "json, name=MarketplaceUrl" })
  marketplaceUrl?: string;

  @Metadata({ data: "json, name=ProductArn" })
  productArn: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProductSubscriptionResourcePolicy" })
  productSubscriptionResourcePolicy?: string;
}
