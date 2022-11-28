from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersMeHistoryVideosRemoveRequestBody:
    before_date: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'beforeDate' }})
    

@dataclass
class PostUsersMeHistoryVideosRemoveSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersMeHistoryVideosRemoveRequest:
    security: PostUsersMeHistoryVideosRemoveSecurity = field()
    request: Optional[PostUsersMeHistoryVideosRemoveRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUsersMeHistoryVideosRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    
