from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class UpdateReadTimestampPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateReadTimestampRequestBody:
    timestamp: datetime = field(default=None, metadata={'form': { 'field_name': 'timestamp' }})
    

@dataclass
class UpdateReadTimestampSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateReadTimestampRequest:
    path_params: UpdateReadTimestampPathParams = field(default=None)
    request: UpdateReadTimestampRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateReadTimestampSecurity = field(default=None)
    

@dataclass
class UpdateReadTimestampResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
