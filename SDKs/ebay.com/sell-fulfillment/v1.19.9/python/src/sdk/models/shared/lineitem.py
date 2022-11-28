from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineItem:
    r"""LineItem
    This type contains the details of each line item in an order.
    """
    
    applied_promotions: Optional[List[AppliedPromotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedPromotions') }})
    delivery_cost: Optional[DeliveryCost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCost') }})
    discounted_line_item_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountedLineItemCost') }})
    ebay_collect_and_remit_taxes: Optional[List[EbayCollectAndRemitTax]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebayCollectAndRemitTaxes') }})
    gift_details: Optional[GiftDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftDetails') }})
    item_location: Optional[ItemLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemLocation') }})
    legacy_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyItemId') }})
    legacy_variation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyVariationId') }})
    line_item_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemCost') }})
    line_item_fulfillment_instructions: Optional[LineItemFulfillmentInstructions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemFulfillmentInstructions') }})
    line_item_fulfillment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemFulfillmentStatus') }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    listing_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingMarketplaceId') }})
    properties: Optional[LineItemProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    purchase_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseMarketplaceId') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    refunds: Optional[List[LineItemRefund]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    sold_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldFormat') }})
    taxes: Optional[List[Tax]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
