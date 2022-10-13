from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TaxAPIAllHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class TaxAPIAllRequest:
    headers: TaxAPIAllHeaders = field(default=None)
    

@dataclass
class TaxAPIAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_details_api_models: Optional[List[shared.TaxDetailsAPIModel]] = field(default=None)
    
