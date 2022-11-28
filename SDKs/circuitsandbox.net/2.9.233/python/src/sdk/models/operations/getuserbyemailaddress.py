from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUserByEmailAddressPathParams:
    email_address: str = field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserByEmailAddressQueryParams:
    secondary_lookup: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryLookup', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserByEmailAddressSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserByEmailAddressRequest:
    path_params: GetUserByEmailAddressPathParams = field()
    query_params: GetUserByEmailAddressQueryParams = field()
    security: GetUserByEmailAddressSecurity = field()
    

@dataclass
class GetUserByEmailAddressResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user: Optional[Any] = field(default=None)
    
