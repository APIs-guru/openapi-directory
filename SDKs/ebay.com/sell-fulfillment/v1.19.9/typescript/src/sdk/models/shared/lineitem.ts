import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppliedPromotion } from "./appliedpromotion";
import { DeliveryCost } from "./deliverycost";
import { Amount } from "./amount";
import { EbayCollectAndRemitTax } from "./ebaycollectandremittax";
import { GiftDetails } from "./giftdetails";
import { ItemLocation } from "./itemlocation";
import { LineItemFulfillmentInstructions } from "./lineitemfulfillmentinstructions";
import { LineItemProperties } from "./lineitemproperties";
import { LineItemRefund } from "./lineitemrefund";
import { Tax } from "./tax";



// LineItem
/** 
 * This type contains the details of each line item in an order.
**/
export class LineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedPromotions", elemType: AppliedPromotion })
  appliedPromotions?: AppliedPromotion[];

  @SpeakeasyMetadata({ data: "json, name=deliveryCost" })
  deliveryCost?: DeliveryCost;

  @SpeakeasyMetadata({ data: "json, name=discountedLineItemCost" })
  discountedLineItemCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=ebayCollectAndRemitTaxes", elemType: EbayCollectAndRemitTax })
  ebayCollectAndRemitTaxes?: EbayCollectAndRemitTax[];

  @SpeakeasyMetadata({ data: "json, name=giftDetails" })
  giftDetails?: GiftDetails;

  @SpeakeasyMetadata({ data: "json, name=itemLocation" })
  itemLocation?: ItemLocation;

  @SpeakeasyMetadata({ data: "json, name=legacyItemId" })
  legacyItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyVariationId" })
  legacyVariationId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemCost" })
  lineItemCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=lineItemFulfillmentInstructions" })
  lineItemFulfillmentInstructions?: LineItemFulfillmentInstructions;

  @SpeakeasyMetadata({ data: "json, name=lineItemFulfillmentStatus" })
  lineItemFulfillmentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=listingMarketplaceId" })
  listingMarketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: LineItemProperties;

  @SpeakeasyMetadata({ data: "json, name=purchaseMarketplaceId" })
  purchaseMarketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=refunds", elemType: LineItemRefund })
  refunds?: LineItemRefund[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=soldFormat" })
  soldFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: Tax })
  taxes?: Tax[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: Amount;
}
