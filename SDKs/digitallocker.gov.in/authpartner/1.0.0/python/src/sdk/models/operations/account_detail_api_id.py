from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AccountDetailAPIIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AccountDetailAPIID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class AccountDetailAPIID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class AccountDetailAPIIDRequest:
    security: AccountDetailAPIIDSecurity = field()
    

@dataclass
class AccountDetailAPIIDResponse:
    content_type: str = field()
    status_code: int = field()
    account_detail_api_id_401_application_json_object: Optional[AccountDetailAPIID401ApplicationJSON] = field(default=None)
    account_detail_api_id_500_application_json_object: Optional[AccountDetailAPIID500ApplicationJSON] = field(default=None)
    sample: Optional[Any] = field(default=None)
    
