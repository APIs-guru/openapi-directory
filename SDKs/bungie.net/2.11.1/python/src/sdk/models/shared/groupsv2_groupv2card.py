from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupV2Card:
    r"""GroupsV2GroupV2Card
    A small infocard of group information, usually used for when a list of groups are returned
    """
    
    about: Optional[str] = field(default=None)
    avatar_path: Optional[str] = field(default=None)
    capabilities: Optional[int] = field(default=None)
    clan_info: Optional[GroupsV2GroupV2ClanInfo] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    group_id: Optional[int] = field(default=None)
    group_type: Optional[int] = field(default=None)
    locale: Optional[str] = field(default=None)
    member_count: Optional[int] = field(default=None)
    membership_option: Optional[int] = field(default=None)
    motto: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    theme: Optional[str] = field(default=None)
    
