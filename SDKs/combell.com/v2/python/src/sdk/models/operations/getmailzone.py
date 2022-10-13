from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMailZonePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMailZoneQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMailZoneRequest:
    path_params: GetMailZonePathParams = field(default=None)
    query_params: GetMailZoneQueryParams = field(default=None)
    

@dataclass
class GetMailZoneResponse:
    content_type: str = field(default=None)
    mail_zone: Optional[shared.MailZone] = field(default=None)
    status_code: int = field(default=None)
    
