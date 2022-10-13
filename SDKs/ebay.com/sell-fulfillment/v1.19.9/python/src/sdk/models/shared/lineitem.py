from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appliedpromotion
from . import deliverycost
from . import amount
from . import ebaycollectandremittax
from . import giftdetails
from . import itemlocation
from . import amount
from . import lineitemfulfillmentinstructions
from . import lineitemproperties
from . import lineitemrefund
from . import tax
from . import amount


@dataclass_json
@dataclass
class LineItem:
    applied_promotions: Optional[List[appliedpromotion.AppliedPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedPromotions' }})
    delivery_cost: Optional[deliverycost.DeliveryCost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCost' }})
    discounted_line_item_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountedLineItemCost' }})
    ebay_collect_and_remit_taxes: Optional[List[ebaycollectandremittax.EbayCollectAndRemitTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebayCollectAndRemitTaxes' }})
    gift_details: Optional[giftdetails.GiftDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'giftDetails' }})
    item_location: Optional[itemlocation.ItemLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemLocation' }})
    legacy_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyItemId' }})
    legacy_variation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyVariationId' }})
    line_item_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemCost' }})
    line_item_fulfillment_instructions: Optional[lineitemfulfillmentinstructions.LineItemFulfillmentInstructions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemFulfillmentInstructions' }})
    line_item_fulfillment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemFulfillmentStatus' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    listing_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingMarketplaceId' }})
    properties: Optional[lineitemproperties.LineItemProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    purchase_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseMarketplaceId' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    refunds: Optional[List[lineitemrefund.LineItemRefund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    sold_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soldFormat' }})
    taxes: Optional[List[tax.Tax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
