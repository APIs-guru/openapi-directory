from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IbanBasicRequestBody:
    iban_number: str = field(metadata={'form': { 'field_name': 'ibanNumber' }})
    

@dataclass
class IbanBasicSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class IbanBasicRequest:
    request: IbanBasicRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: IbanBasicSecurity = field()
    

@dataclass
class IbanBasicResponse:
    content_type: str = field()
    status_code: int = field()
    iban_basic_200_application_json_any: Optional[Any] = field(default=None)
    iban_basic_default_application_json_any: Optional[Any] = field(default=None)
    
