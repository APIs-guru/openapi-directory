from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureSMTPDomainPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    hostname: str = field(metadata={'path_param': { 'field_name': 'hostname', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureSMTPDomainQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureSMTPDomainRequest:
    path_params: ConfigureSMTPDomainPathParams = field()
    query_params: ConfigureSMTPDomainQueryParams = field()
    request: Optional[shared.UpdateSMTPDomainRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureSMTPDomainResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    
