from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class NifBasicPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class NifBasicRequestBody:
    nif_number: str = field(metadata={'form': { 'field_name': 'nifNumber' }})
    company_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    

@dataclass
class NifBasicSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NifBasicRequest:
    path_params: NifBasicPathParams = field()
    request: NifBasicRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: NifBasicSecurity = field()
    

@dataclass
class NifBasicResponse:
    content_type: str = field()
    status_code: int = field()
    nif_basic_200_application_json_any: Optional[Any] = field(default=None)
    nif_basic_default_application_json_any: Optional[Any] = field(default=None)
    
