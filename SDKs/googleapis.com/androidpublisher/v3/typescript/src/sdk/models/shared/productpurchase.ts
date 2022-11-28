import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductPurchase
/** 
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
export class ProductPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgementState" })
  acknowledgementState?: number;

  @SpeakeasyMetadata({ data: "json, name=consumptionState" })
  consumptionState?: number;

  @SpeakeasyMetadata({ data: "json, name=developerPayload" })
  developerPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalAccountId" })
  obfuscatedExternalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalProfileId" })
  obfuscatedExternalProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseState" })
  purchaseState?: number;

  @SpeakeasyMetadata({ data: "json, name=purchaseTimeMillis" })
  purchaseTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseToken" })
  purchaseToken?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseType" })
  purchaseType?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
