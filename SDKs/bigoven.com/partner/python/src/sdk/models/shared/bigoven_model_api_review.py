from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api_reply
from . import bigoven_model_api_userinfo
from . import bigoven_model_api_review


@dataclass_json
@dataclass
class BigOvenModelAPIReview:
    active_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveMinutes' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    featured_reply: Optional[bigoven_model_api_reply.BigOvenModelAPIReply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturedReply' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GUID' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentID' }})
    poster: Optional[bigoven_model_api_userinfo.BigOvenModelAPIUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Poster' }})
    replies: Optional[List[bigoven_model_api_review.BigOvenModelAPIReview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replies' }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplyCount' }})
    review_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewID' }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StarRating' }})
    total_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalMinutes' }})
    
