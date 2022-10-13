from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class VatLevelTwoPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class VatLevelTwoRequestBody:
    confirmation: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'confirmation' }})
    vat_number: str = field(default=None, metadata={'form': { 'field_name': 'vatNumber' }})
    

@dataclass
class VatLevelTwoSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class VatLevelTwoRequest:
    path_params: VatLevelTwoPathParams = field(default=None)
    request: VatLevelTwoRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatLevelTwoSecurity = field(default=None)
    

@dataclass
class VatLevelTwoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vat_level_two_200_application_json_any: Optional[Any] = field(default=None)
    vat_level_two_default_application_json_any: Optional[Any] = field(default=None)
    
