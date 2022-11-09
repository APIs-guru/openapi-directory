import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppliedPromotion } from "./appliedpromotion";
import { DeliveryCost } from "./deliverycost";
import { Amount } from "./amount";
import { EbayCollectAndRemitTax } from "./ebaycollectandremittax";
import { GiftDetails } from "./giftdetails";
import { ItemLocation } from "./itemlocation";
import { Amount } from "./amount";
import { LineItemFulfillmentInstructions } from "./lineitemfulfillmentinstructions";
import { LineItemProperties } from "./lineitemproperties";
import { LineItemRefund } from "./lineitemrefund";
import { Tax } from "./tax";
import { Amount } from "./amount";


// LineItem
/** 
 * This type contains the details of each line item in an order.
**/
export class LineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedPromotions", elemType: shared.AppliedPromotion })
  appliedPromotions?: AppliedPromotion[];

  @Metadata({ data: "json, name=deliveryCost" })
  deliveryCost?: DeliveryCost;

  @Metadata({ data: "json, name=discountedLineItemCost" })
  discountedLineItemCost?: Amount;

  @Metadata({ data: "json, name=ebayCollectAndRemitTaxes", elemType: shared.EbayCollectAndRemitTax })
  ebayCollectAndRemitTaxes?: EbayCollectAndRemitTax[];

  @Metadata({ data: "json, name=giftDetails" })
  giftDetails?: GiftDetails;

  @Metadata({ data: "json, name=itemLocation" })
  itemLocation?: ItemLocation;

  @Metadata({ data: "json, name=legacyItemId" })
  legacyItemId?: string;

  @Metadata({ data: "json, name=legacyVariationId" })
  legacyVariationId?: string;

  @Metadata({ data: "json, name=lineItemCost" })
  lineItemCost?: Amount;

  @Metadata({ data: "json, name=lineItemFulfillmentInstructions" })
  lineItemFulfillmentInstructions?: LineItemFulfillmentInstructions;

  @Metadata({ data: "json, name=lineItemFulfillmentStatus" })
  lineItemFulfillmentStatus?: string;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=listingMarketplaceId" })
  listingMarketplaceId?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: LineItemProperties;

  @Metadata({ data: "json, name=purchaseMarketplaceId" })
  purchaseMarketplaceId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=refunds", elemType: shared.LineItemRefund })
  refunds?: LineItemRefund[];

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=soldFormat" })
  soldFormat?: string;

  @Metadata({ data: "json, name=taxes", elemType: shared.Tax })
  taxes?: Tax[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=total" })
  total?: Amount;
}
