from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupBan:
    bungie_net_user_info: Optional[UserUserInfoCard] = field(default=None)
    comment: Optional[str] = field(default=None)
    created_by: Optional[UserUserInfoCard] = field(default=None)
    date_banned: Optional[datetime] = field(default=None)
    date_expires: Optional[datetime] = field(default=None)
    destiny_user_info: Optional[GroupsV2GroupUserInfoCard] = field(default=None)
    group_id: Optional[int] = field(default=None)
    last_modified_by: Optional[UserUserInfoCard] = field(default=None)
    
