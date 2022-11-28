from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PostReportsOptionEnum(str, Enum):
    VALIDATE_PAYLOAD = "ValidatePayload"
    CHECK_CONNECTIONS = "CheckConnections"
    SEND_IMMEDIATELY = "SendImmediately"
    SKIP_SEND = "SkipSend"
    SKIP_INVALID_ITEMS = "SkipInvalidItems"


@dataclass
class PostReportsQueryParams:
    client: str = field(metadata={'query_param': { 'field_name': 'client', 'style': 'form', 'explode': True }})
    default: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'default', 'style': 'form', 'explode': False }})
    option: Optional[PostReportsOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    route_to: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'routeTo', 'style': 'form', 'explode': True }})
    

@dataclass
class PostReportsSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostReportsRequest:
    query_params: PostReportsQueryParams = field()
    request: str = field(metadata={'request': { 'media_type': 'text/csv' }})
    security: PostReportsSecurity = field()
    

@dataclass
class PostReportsResponse:
    content_type: str = field()
    status_code: int = field()
    report: Optional[shared.Report] = field(default=None)
    
