from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class ForumPostResponse:
    is_pinned: Optional[bool] = field(default=None)
    ignore_status: Optional[IgnoresIgnoreResponse] = field(default=None)
    is_active: Optional[bool] = field(default=None)
    is_announcement: Optional[bool] = field(default=None)
    last_reply_timestamp: Optional[datetime] = field(default=None)
    latest_reply_author_id: Optional[int] = field(default=None)
    latest_reply_post_id: Optional[int] = field(default=None)
    locale: Optional[str] = field(default=None)
    popularity: Optional[int] = field(default=None)
    thumbnail: Optional[str] = field(default=None)
    url_media_type: Optional[int] = field(default=None)
    user_has_muted_post: Optional[bool] = field(default=None)
    user_has_rated: Optional[bool] = field(default=None)
    user_rating: Optional[int] = field(default=None)
    
