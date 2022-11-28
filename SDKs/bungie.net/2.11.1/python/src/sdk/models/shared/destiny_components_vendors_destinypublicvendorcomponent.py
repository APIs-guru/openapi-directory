from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DestinyComponentsVendorsDestinyPublicVendorComponent:
    r"""DestinyComponentsVendorsDestinyPublicVendorComponent
    This component contains essential/summary information about the vendor from the perspective of a character-agnostic view.
    """
    
    enabled: Optional[bool] = field(default=None)
    next_refresh_date: Optional[datetime] = field(default=None)
    vendor_hash: Optional[int] = field(default=None)
    
