from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateReadTimestampPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateReadTimestampRequestBody:
    timestamp: datetime = field(metadata={'form': { 'field_name': 'timestamp' }})
    

@dataclass
class UpdateReadTimestampSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateReadTimestampRequest:
    path_params: UpdateReadTimestampPathParams = field()
    request: UpdateReadTimestampRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateReadTimestampSecurity = field()
    

@dataclass
class UpdateReadTimestampResponse:
    content_type: str = field()
    status_code: int = field()
    
