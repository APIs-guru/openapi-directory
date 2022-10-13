from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PushURIToAccountIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PushURIToAccountIDRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PushURIToAccountIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PushURIToAccountID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class PushURIToAccountID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class PushURIToAccountID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class PushURIToAccountID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class PushURIToAccountIDResponse:
    content_type: str = field(default=None)
    push_uri_to_account_id_400_application_json_object: Optional[PushURIToAccountID400ApplicationJSON] = field(default=None)
    push_uri_to_account_id_401_application_json_object: Optional[PushURIToAccountID401ApplicationJSON] = field(default=None)
    push_uri_to_account_id_404_application_json_object: Optional[PushURIToAccountID404ApplicationJSON] = field(default=None)
    push_uri_to_account_id_500_application_json_object: Optional[PushURIToAccountID500ApplicationJSON] = field(default=None)
    sample: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
