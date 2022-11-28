from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeApcuPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeApcuQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeApcuRequest:
    path_params: ChangeApcuPathParams = field()
    query_params: ChangeApcuQueryParams = field()
    request: Optional[shared.UpdatePhpAPcuRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeApcuResponse:
    content_type: str = field()
    status_code: int = field()
    
