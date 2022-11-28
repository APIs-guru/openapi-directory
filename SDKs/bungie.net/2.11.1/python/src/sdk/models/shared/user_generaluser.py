from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UserGeneralUser:
    about: Optional[str] = field(default=None)
    blizzard_display_name: Optional[str] = field(default=None)
    context: Optional[UserUserToUserContext] = field(default=None)
    display_name: Optional[str] = field(default=None)
    fb_display_name: Optional[str] = field(default=None)
    first_access: Optional[datetime] = field(default=None)
    is_deleted: Optional[bool] = field(default=None)
    last_ban_report_id: Optional[int] = field(default=None)
    last_update: Optional[datetime] = field(default=None)
    legacy_portal_uid: Optional[int] = field(default=None)
    locale: Optional[str] = field(default=None)
    locale_inherit_default: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    normalized_name: Optional[str] = field(default=None)
    profile_ban_expire: Optional[datetime] = field(default=None)
    profile_picture: Optional[int] = field(default=None)
    profile_picture_path: Optional[str] = field(default=None)
    profile_picture_wide_path: Optional[str] = field(default=None)
    profile_theme: Optional[int] = field(default=None)
    profile_theme_name: Optional[str] = field(default=None)
    psn_display_name: Optional[str] = field(default=None)
    show_activity: Optional[bool] = field(default=None)
    show_group_messaging: Optional[bool] = field(default=None)
    stadia_display_name: Optional[str] = field(default=None)
    status_date: Optional[datetime] = field(default=None)
    status_text: Optional[str] = field(default=None)
    steam_display_name: Optional[str] = field(default=None)
    success_message_flags: Optional[int] = field(default=None)
    twitch_display_name: Optional[str] = field(default=None)
    unique_name: Optional[str] = field(default=None)
    user_title: Optional[int] = field(default=None)
    user_title_display: Optional[str] = field(default=None)
    xbox_display_name: Optional[str] = field(default=None)
    
