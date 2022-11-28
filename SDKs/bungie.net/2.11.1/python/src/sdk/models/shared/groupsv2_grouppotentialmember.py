from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupPotentialMember:
    bungie_net_user_info: Optional[UserUserInfoCard] = field(default=None)
    destiny_user_info: Optional[GroupsV2GroupUserInfoCard] = field(default=None)
    group_id: Optional[int] = field(default=None)
    join_date: Optional[datetime] = field(default=None)
    potential_status: Optional[int] = field(default=None)
    
