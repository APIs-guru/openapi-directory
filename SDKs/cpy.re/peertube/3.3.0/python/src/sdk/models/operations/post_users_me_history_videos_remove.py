from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostUsersMeHistoryVideosRemoveRequestBody:
    before_date: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'beforeDate' }})
    

@dataclass
class PostUsersMeHistoryVideosRemoveSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeHistoryVideosRemoveRequest:
    request: Optional[PostUsersMeHistoryVideosRemoveRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostUsersMeHistoryVideosRemoveSecurity = field(default=None)
    

@dataclass
class PostUsersMeHistoryVideosRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
