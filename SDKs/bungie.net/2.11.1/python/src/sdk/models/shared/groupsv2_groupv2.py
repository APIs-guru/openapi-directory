from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GroupsV2GroupV2:
    about: Optional[str] = field(default=None)
    allow_chat: Optional[bool] = field(default=None)
    avatar_image_index: Optional[int] = field(default=None)
    avatar_path: Optional[str] = field(default=None)
    ban_expire_date: Optional[datetime] = field(default=None)
    banner_path: Optional[str] = field(default=None)
    chat_security: Optional[int] = field(default=None)
    clan_info: Optional[GroupsV2GroupV2ClanInfoAndInvestment] = field(default=None)
    conversation_id: Optional[int] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    default_publicity: Optional[int] = field(default=None)
    enable_invitation_messaging_for_admins: Optional[bool] = field(default=None)
    features: Optional[GroupsV2GroupFeatures] = field(default=None)
    group_id: Optional[int] = field(default=None)
    group_type: Optional[int] = field(default=None)
    homepage: Optional[int] = field(default=None)
    is_default_post_public: Optional[bool] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    is_public_topic_admin_only: Optional[bool] = field(default=None)
    locale: Optional[str] = field(default=None)
    member_count: Optional[int] = field(default=None)
    membership_id_created: Optional[int] = field(default=None)
    membership_option: Optional[int] = field(default=None)
    modification_date: Optional[datetime] = field(default=None)
    motto: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    tags: Optional[List[str]] = field(default=None)
    theme: Optional[str] = field(default=None)
    
