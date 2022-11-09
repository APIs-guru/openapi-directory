import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductPurchase
/** 
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
export class ProductPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgementState" })
  acknowledgementState?: number;

  @Metadata({ data: "json, name=consumptionState" })
  consumptionState?: number;

  @Metadata({ data: "json, name=developerPayload" })
  developerPayload?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=obfuscatedExternalAccountId" })
  obfuscatedExternalAccountId?: string;

  @Metadata({ data: "json, name=obfuscatedExternalProfileId" })
  obfuscatedExternalProfileId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=purchaseState" })
  purchaseState?: number;

  @Metadata({ data: "json, name=purchaseTimeMillis" })
  purchaseTimeMillis?: string;

  @Metadata({ data: "json, name=purchaseToken" })
  purchaseToken?: string;

  @Metadata({ data: "json, name=purchaseType" })
  purchaseType?: number;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
