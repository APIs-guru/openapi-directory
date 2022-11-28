from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class FireteamFireteamSummary:
    activity_type: Optional[int] = field(default=None)
    alternate_slot_count: Optional[int] = field(default=None)
    available_alternate_slot_count: Optional[int] = field(default=None)
    available_player_slot_count: Optional[int] = field(default=None)
    date_created: Optional[datetime] = field(default=None)
    date_modified: Optional[datetime] = field(default=None)
    date_player_modified: Optional[datetime] = field(default=None)
    fireteam_id: Optional[int] = field(default=None)
    group_id: Optional[int] = field(default=None)
    is_immediate: Optional[bool] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    is_valid: Optional[bool] = field(default=None)
    locale: Optional[str] = field(default=None)
    owner_membership_id: Optional[int] = field(default=None)
    platform: Optional[int] = field(default=None)
    player_slot_count: Optional[int] = field(default=None)
    scheduled_time: Optional[datetime] = field(default=None)
    title: Optional[str] = field(default=None)
    title_before_moderation: Optional[str] = field(default=None)
    
