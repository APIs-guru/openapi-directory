from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ChangePhpMemoryLimitPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangePhpMemoryLimitQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangePhpMemoryLimitRequest:
    path_params: ChangePhpMemoryLimitPathParams = field()
    query_params: ChangePhpMemoryLimitQueryParams = field()
    request: Optional[shared.UpdatePhpMemoryLimitRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangePhpMemoryLimitResponse:
    content_type: str = field()
    status_code: int = field()
    
