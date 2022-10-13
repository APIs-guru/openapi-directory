from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class IbanComprehensiveRequestBody:
    iban_number: str = field(default=None, metadata={'form': { 'field_name': 'ibanNumber' }})
    

@dataclass
class IbanComprehensiveSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class IbanComprehensiveRequest:
    request: IbanComprehensiveRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: IbanComprehensiveSecurity = field(default=None)
    

@dataclass
class IbanComprehensiveResponse:
    content_type: str = field(default=None)
    iban_comprehensive_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    oneapi_1v1_1iban_verification_1check_iban_post_responses_200_content_application_1json_schema: Optional[Any] = field(default=None)
    
