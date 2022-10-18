from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetFileFromURIIDPathParams:
    uri: str = field(default=None, metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileFromURIIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetFileFromURIIDRequest:
    path_params: GetFileFromURIIDPathParams = field(default=None)
    security: GetFileFromURIIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetFileFromURIID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetFileFromURIID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetFileFromURIID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetFileFromURIIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_file_from_uri_id_400_application_json_object: Optional[GetFileFromURIID400ApplicationJSON] = field(default=None)
    get_file_from_uri_id_401_application_json_object: Optional[GetFileFromURIID401ApplicationJSON] = field(default=None)
    get_file_from_uri_id_404_application_json_object: Optional[GetFileFromURIID404ApplicationJSON] = field(default=None)
    get_file_from_uri_id_500_application_json_one_of: Optional[Any] = field(default=None)
    get_file_from_uri_id_503_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
