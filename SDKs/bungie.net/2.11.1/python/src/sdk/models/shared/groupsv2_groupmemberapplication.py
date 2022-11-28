from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupMemberApplication:
    bungie_net_user_info: Optional[UserUserInfoCard] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    destiny_user_info: Optional[GroupsV2GroupUserInfoCard] = field(default=None)
    group_id: Optional[int] = field(default=None)
    request_message: Optional[str] = field(default=None)
    resolve_date: Optional[datetime] = field(default=None)
    resolve_message: Optional[str] = field(default=None)
    resolve_state: Optional[int] = field(default=None)
    resolved_by_membership_id: Optional[int] = field(default=None)
    
