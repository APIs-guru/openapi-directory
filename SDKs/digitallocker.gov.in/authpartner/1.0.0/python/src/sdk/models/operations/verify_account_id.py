from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class VerifyAccountIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VerifyAccountIDRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: VerifyAccountIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class VerifyAccountID400ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class VerifyAccountID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class VerifyAccountID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class VerifyAccountIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_account_id_400_application_json_object: Optional[VerifyAccountID400ApplicationJSON] = field(default=None)
    verify_account_id_401_application_json_object: Optional[VerifyAccountID401ApplicationJSON] = field(default=None)
    verify_account_id_500_application_json_object: Optional[VerifyAccountID500ApplicationJSON] = field(default=None)
    verify_account_response: Optional[shared.VerifyAccountResponse] = field(default=None)
    
