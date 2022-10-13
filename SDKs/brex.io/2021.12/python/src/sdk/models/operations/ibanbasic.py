from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class IbanBasicRequestBody:
    iban_number: str = field(default=None, metadata={'form': { 'field_name': 'ibanNumber' }})
    

@dataclass
class IbanBasicSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class IbanBasicRequest:
    request: IbanBasicRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: IbanBasicSecurity = field(default=None)
    

@dataclass
class IbanBasicResponse:
    content_type: str = field(default=None)
    iban_basic_200_application_json_any: Optional[Any] = field(default=None)
    iban_basic_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
