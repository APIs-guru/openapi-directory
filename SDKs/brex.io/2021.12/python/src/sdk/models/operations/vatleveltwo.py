from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class VatLevelTwoPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class VatLevelTwoRequestBody:
    vat_number: str = field(metadata={'form': { 'field_name': 'vatNumber' }})
    confirmation: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'confirmation' }})
    

@dataclass
class VatLevelTwoSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class VatLevelTwoRequest:
    path_params: VatLevelTwoPathParams = field()
    request: VatLevelTwoRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatLevelTwoSecurity = field()
    

@dataclass
class VatLevelTwoResponse:
    content_type: str = field()
    status_code: int = field()
    vat_level_two_200_application_json_any: Optional[Any] = field(default=None)
    vat_level_two_default_application_json_any: Optional[Any] = field(default=None)
    
