from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class FireteamFireteamMember:
    bungie_net_user_info: Optional[UserUserInfoCard] = field(default=None)
    character_id: Optional[int] = field(default=None)
    date_joined: Optional[datetime] = field(default=None)
    destiny_user_info: Optional[FireteamFireteamUserInfoCard] = field(default=None)
    has_microphone: Optional[bool] = field(default=None)
    last_platform_invite_attempt_date: Optional[datetime] = field(default=None)
    last_platform_invite_attempt_result: Optional[int] = field(default=None)
    
