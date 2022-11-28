from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMailZonePathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMailZoneQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMailZoneRequest:
    path_params: GetMailZonePathParams = field()
    query_params: GetMailZoneQueryParams = field()
    

@dataclass
class GetMailZoneResponse:
    content_type: str = field()
    status_code: int = field()
    mail_zone: Optional[shared.MailZone] = field(default=None)
    
