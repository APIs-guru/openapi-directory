from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserByEmailAddressPathParams:
    email_address: str = field(default=None, metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserByEmailAddressQueryParams:
    secondary_lookup: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryLookup', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserByEmailAddressSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserByEmailAddressRequest:
    path_params: GetUserByEmailAddressPathParams = field(default=None)
    query_params: GetUserByEmailAddressQueryParams = field(default=None)
    security: GetUserByEmailAddressSecurity = field(default=None)
    

@dataclass
class GetUserByEmailAddressResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[Any] = field(default=None)
    
