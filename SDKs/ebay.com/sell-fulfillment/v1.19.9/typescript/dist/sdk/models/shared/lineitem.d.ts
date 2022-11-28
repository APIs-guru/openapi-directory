import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * This type contains the details of each line item in an order.
**/
export declare class LineItem extends SpeakeasyBase {
    appliedPromotions?: AppliedPromotion[];
    deliveryCost?: DeliveryCost;
    discountedLineItemCost?: Amount;
    ebayCollectAndRemitTaxes?: EbayCollectAndRemitTax[];
    giftDetails?: GiftDetails;
    itemLocation?: ItemLocation;
    legacyItemId?: string;
    legacyVariationId?: string;
    lineItemCost?: Amount;
    lineItemFulfillmentInstructions?: LineItemFulfillmentInstructions;
    lineItemFulfillmentStatus?: string;
    lineItemId?: string;
    listingMarketplaceId?: string;
    properties?: LineItemProperties;
    purchaseMarketplaceId?: string;
    quantity?: number;
    refunds?: LineItemRefund[];
    sku?: string;
    soldFormat?: string;
    taxes?: Tax[];
    title?: string;
    total?: Amount;
}
