from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetFileFromURIIDPathParams:
    uri: str = field(metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileFromURIIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetFileFromURIID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetFileFromURIID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetFileFromURIID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetFileFromURIIDRequest:
    path_params: GetFileFromURIIDPathParams = field()
    security: GetFileFromURIIDSecurity = field()
    

@dataclass
class GetFileFromURIIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_file_from_uri_id_200_application_pdf_string: Optional[str] = field(default=None)
    get_file_from_uri_id_200_image_jpeg_string: Optional[str] = field(default=None)
    get_file_from_uri_id_200_image_jpg_string: Optional[str] = field(default=None)
    get_file_from_uri_id_200_image_png_string: Optional[str] = field(default=None)
    get_file_from_uri_id_400_application_json_object: Optional[GetFileFromURIID400ApplicationJSON] = field(default=None)
    get_file_from_uri_id_401_application_json_object: Optional[GetFileFromURIID401ApplicationJSON] = field(default=None)
    get_file_from_uri_id_404_application_json_object: Optional[GetFileFromURIID404ApplicationJSON] = field(default=None)
    get_file_from_uri_id_500_application_json_one_of: Optional[Any] = field(default=None)
    get_file_from_uri_id_503_application_json_one_of: Optional[Any] = field(default=None)
    
