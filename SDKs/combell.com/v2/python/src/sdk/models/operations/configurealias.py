from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureAliasPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    email_address: str = field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureAliasQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    email_address: str = field(metadata={'query_param': { 'field_name': 'email_address', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureAliasRequest:
    path_params: ConfigureAliasPathParams = field()
    query_params: ConfigureAliasQueryParams = field()
    request: Optional[shared.UpdateAliasRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureAliasResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    
