from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from . import *


@dataclass
class ContentContentItemPublicContract:
    allow_comments: Optional[bool] = field(default=None)
    author: Optional[UserGeneralUser] = field(default=None)
    auto_english_property_fallback: Optional[bool] = field(default=None)
    c_type: Optional[str] = field(default=None)
    cms_path: Optional[str] = field(default=None)
    comment_summary: Optional[ContentCommentSummary] = field(default=None)
    content_id: Optional[int] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    has_age_gate: Optional[bool] = field(default=None)
    minimum_age: Optional[int] = field(default=None)
    modify_date: Optional[datetime] = field(default=None)
    properties: Optional[dict[str, dict[str, Any]]] = field(default=None)
    rating_image_path: Optional[str] = field(default=None)
    representations: Optional[List[ContentContentRepresentation]] = field(default=None)
    tags: Optional[List[str]] = field(default=None)
    
