from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetListOfIssuersIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetListOfIssuersID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetListOfIssuersID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetListOfIssuersID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetListOfIssuersIDRequest:
    security: GetListOfIssuersIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetListOfIssuersIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_list_of_issuers_id_400_application_json_object: Optional[GetListOfIssuersID400ApplicationJSON] = field(default=None)
    get_list_of_issuers_id_401_application_json_object: Optional[GetListOfIssuersID401ApplicationJSON] = field(default=None)
    get_list_of_issuers_id_500_application_json_object: Optional[GetListOfIssuersID500ApplicationJSON] = field(default=None)
    issuer_response: Optional[shared.IssuerResponse] = field(default=None)
    
