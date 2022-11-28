from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesVendorsDestinyVendorComponentProgression:
    r"""DestinyEntitiesVendorsDestinyVendorComponentProgression
    If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
    """
    
    current_progress: Optional[int] = field(default=None)
    current_reset_count: Optional[int] = field(default=None)
    daily_limit: Optional[int] = field(default=None)
    daily_progress: Optional[int] = field(default=None)
    level: Optional[int] = field(default=None)
    level_cap: Optional[int] = field(default=None)
    next_level_at: Optional[int] = field(default=None)
    progress_to_next_level: Optional[int] = field(default=None)
    progression_hash: Optional[int] = field(default=None)
    reward_item_states: Optional[List[int]] = field(default=None)
    season_resets: Optional[List[DestinyDestinyProgressionResetEntry]] = field(default=None)
    step_index: Optional[int] = field(default=None)
    weekly_limit: Optional[int] = field(default=None)
    weekly_progress: Optional[int] = field(default=None)
    

@dataclass
class DestinyEntitiesVendorsDestinyVendorComponent:
    r"""DestinyEntitiesVendorsDestinyVendorComponent
    This component contains essential/summary information about the vendor.
    """
    
    can_purchase: Optional[bool] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    next_refresh_date: Optional[datetime] = field(default=None)
    progression: Optional[DestinyEntitiesVendorsDestinyVendorComponentProgression] = field(default=None)
    seasonal_rank: Optional[int] = field(default=None)
    vendor_hash: Optional[int] = field(default=None)
    vendor_location_index: Optional[int] = field(default=None)
    
