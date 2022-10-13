from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class NifComprehensivePathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class NifComprehensiveRequestBody:
    company_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    nif_number: str = field(default=None, metadata={'form': { 'field_name': 'nifNumber' }})
    

@dataclass
class NifComprehensiveSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NifComprehensiveRequest:
    path_params: NifComprehensivePathParams = field(default=None)
    request: NifComprehensiveRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: NifComprehensiveSecurity = field(default=None)
    

@dataclass
class NifComprehensiveResponse:
    content_type: str = field(default=None)
    nif_comprehensive_200_application_json_any: Optional[Any] = field(default=None)
    nif_comprehensive_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
