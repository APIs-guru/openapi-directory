from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyVendorsDestinyVendorReceiptItemReceived:
    r"""DestinyVendorsDestinyVendorReceiptItemReceived
    The item that was received, and its quantity.
    """
    
    has_conditional_visibility: Optional[bool] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    item_instance_id: Optional[int] = field(default=None)
    quantity: Optional[int] = field(default=None)
    

@dataclass
class DestinyVendorsDestinyVendorReceipt:
    r"""DestinyVendorsDestinyVendorReceipt
    If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
    """
    
    currency_paid: Optional[List[DestinyDestinyItemQuantity]] = field(default=None)
    expires_on: Optional[datetime] = field(default=None)
    item_received: Optional[DestinyVendorsDestinyVendorReceiptItemReceived] = field(default=None)
    license_unlock_hash: Optional[int] = field(default=None)
    purchased_by_character_id: Optional[int] = field(default=None)
    refund_policy: Optional[int] = field(default=None)
    sequence_number: Optional[int] = field(default=None)
    time_to_expiration: Optional[int] = field(default=None)
    
