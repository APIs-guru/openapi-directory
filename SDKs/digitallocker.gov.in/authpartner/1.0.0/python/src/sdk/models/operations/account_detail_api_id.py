from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class AccountDetailAPIIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AccountDetailAPIIDRequest:
    security: AccountDetailAPIIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AccountDetailAPIID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class AccountDetailAPIID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class AccountDetailAPIIDResponse:
    account_detail_api_id_401_application_json_object: Optional[AccountDetailAPIID401ApplicationJSON] = field(default=None)
    account_detail_api_id_500_application_json_object: Optional[AccountDetailAPIID500ApplicationJSON] = field(default=None)
    content_type: str = field(default=None)
    sample: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
