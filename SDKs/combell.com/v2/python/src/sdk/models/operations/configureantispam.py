from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureAntiSpamPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureAntiSpamQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureAntiSpamRequest:
    path_params: ConfigureAntiSpamPathParams = field()
    query_params: ConfigureAntiSpamQueryParams = field()
    request: Optional[shared.UpdateAntiSpamRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureAntiSpamResponse:
    content_type: str = field()
    status_code: int = field()
    
