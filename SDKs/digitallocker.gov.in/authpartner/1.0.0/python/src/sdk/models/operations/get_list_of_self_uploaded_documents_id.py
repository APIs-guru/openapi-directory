from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetListOfSelfUploadedDocumentsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListOfSelfUploadedDocumentsIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocumentsID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocumentsID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocumentsID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetListOfSelfUploadedDocumentsIDRequest:
    path_params: GetListOfSelfUploadedDocumentsIDPathParams = field()
    security: GetListOfSelfUploadedDocumentsIDSecurity = field()
    

@dataclass
class GetListOfSelfUploadedDocumentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_list_of_self_uploaded_documents_id_401_application_json_object: Optional[GetListOfSelfUploadedDocumentsID401ApplicationJSON] = field(default=None)
    get_list_of_self_uploaded_documents_id_404_application_json_object: Optional[GetListOfSelfUploadedDocumentsID404ApplicationJSON] = field(default=None)
    get_list_of_self_uploaded_documents_id_500_application_json_object: Optional[GetListOfSelfUploadedDocumentsID500ApplicationJSON] = field(default=None)
    sample: Optional[Any] = field(default=None)
    
