from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetListOfIssuersIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListOfIssuersIDRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: GetListOfIssuersIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListOfIssuersID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetListOfIssuersID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetListOfIssuersID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetListOfIssuersIDResponse:
    content_type: str = field(default=None)
    get_list_of_issuers_id_400_application_json_object: Optional[GetListOfIssuersID400ApplicationJSON] = field(default=None)
    get_list_of_issuers_id_401_application_json_object: Optional[GetListOfIssuersID401ApplicationJSON] = field(default=None)
    get_list_of_issuers_id_500_application_json_object: Optional[GetListOfIssuersID500ApplicationJSON] = field(default=None)
    issuer_response: Optional[shared.IssuerResponse] = field(default=None)
    status_code: int = field(default=None)
    
