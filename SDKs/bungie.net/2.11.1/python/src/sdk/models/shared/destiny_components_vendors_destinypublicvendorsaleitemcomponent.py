from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent:
    r"""DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent
    Has character-agnostic information about an item being sold by a vendor.
    Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's \"items\" property. For most of these, however, you'll have to ask for it in context of a specific character.
    """
    
    api_purchasable: Optional[bool] = field(default=None)
    costs: Optional[List[DestinyDestinyItemQuantity]] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    override_next_refresh_date: Optional[datetime] = field(default=None)
    override_style_item_hash: Optional[int] = field(default=None)
    quantity: Optional[int] = field(default=None)
    vendor_item_index: Optional[int] = field(default=None)
    
