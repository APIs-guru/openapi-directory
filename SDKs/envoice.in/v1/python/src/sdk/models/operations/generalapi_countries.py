from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GeneralAPICountriesHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneralAPICountriesRequest:
    headers: GeneralAPICountriesHeaders = field(default=None)
    

@dataclass
class GeneralAPICountriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    country_details_api_models: Optional[List[shared.CountryDetailsAPIModel]] = field(default=None)
    status_code: int = field(default=None)
    
