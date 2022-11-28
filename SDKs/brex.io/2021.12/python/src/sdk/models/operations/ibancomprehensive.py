from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IbanComprehensiveRequestBody:
    iban_number: str = field(metadata={'form': { 'field_name': 'ibanNumber' }})
    

@dataclass
class IbanComprehensiveSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class IbanComprehensiveRequest:
    request: IbanComprehensiveRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: IbanComprehensiveSecurity = field()
    

@dataclass
class IbanComprehensiveResponse:
    content_type: str = field()
    status_code: int = field()
    iban_comprehensive_default_application_json_any: Optional[Any] = field(default=None)
    oneapi_1v1_1iban_verification_1check_iban_post_responses_200_content_application_1json_schema: Optional[Any] = field(default=None)
    
