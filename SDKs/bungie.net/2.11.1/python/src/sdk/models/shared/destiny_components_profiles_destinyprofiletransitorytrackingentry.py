from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry:
    r"""DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry
    This represents a single \"thing\" being tracked by the player.
    This can point to many types of entities, but only a subset of them will actually have a valid hash identifier for whatever it is being pointed to.
    It's up to you to interpret what it means when various combinations of these entries have values being tracked.
    """
    
    activity_hash: Optional[int] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    location_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    questline_item_hash: Optional[int] = field(default=None)
    tracked_date: Optional[datetime] = field(default=None)
    
