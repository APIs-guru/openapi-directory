from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesVendorsDestinyVendorSaleItemComponent:
    r"""DestinyEntitiesVendorsDestinyVendorSaleItemComponent
    Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
    Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's \"items\" property.
    """
    
    api_purchasable: Optional[bool] = field(default=None)
    augments: Optional[int] = field(default=None)
    costs: Optional[List[DestinyDestinyItemQuantity]] = field(default=None)
    failure_indexes: Optional[List[int]] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    item_value_visibility: Optional[List[bool]] = field(default=None)
    override_next_refresh_date: Optional[datetime] = field(default=None)
    override_style_item_hash: Optional[int] = field(default=None)
    quantity: Optional[int] = field(default=None)
    required_unlocks: Optional[List[int]] = field(default=None)
    sale_status: Optional[int] = field(default=None)
    unlock_statuses: Optional[List[DestinyDestinyUnlockStatus]] = field(default=None)
    vendor_item_index: Optional[int] = field(default=None)
    
