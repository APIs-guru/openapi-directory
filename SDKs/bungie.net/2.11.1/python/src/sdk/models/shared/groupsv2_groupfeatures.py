from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class GroupsV2GroupFeatures:
    capabilities: Optional[int] = field(default=None)
    host_guided_game_permission_override: Optional[int] = field(default=None)
    invite_permission_override: Optional[bool] = field(default=None)
    join_level: Optional[int] = field(default=None)
    maximum_members: Optional[int] = field(default=None)
    maximum_memberships_of_group_type: Optional[int] = field(default=None)
    membership_types: Optional[List[int]] = field(default=None)
    update_banner_permission_override: Optional[bool] = field(default=None)
    update_culture_permission_override: Optional[bool] = field(default=None)
    
