from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetListOfSelfUploadedDocumentsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListOfSelfUploadedDocumentsIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetListOfSelfUploadedDocumentsIDRequest:
    path_params: GetListOfSelfUploadedDocumentsIDPathParams = field(default=None)
    security: GetListOfSelfUploadedDocumentsIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocumentsID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocumentsID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocumentsID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetListOfSelfUploadedDocumentsIDResponse:
    content_type: str = field(default=None)
    get_list_of_self_uploaded_documents_id_401_application_json_object: Optional[GetListOfSelfUploadedDocumentsID401ApplicationJSON] = field(default=None)
    get_list_of_self_uploaded_documents_id_404_application_json_object: Optional[GetListOfSelfUploadedDocumentsID404ApplicationJSON] = field(default=None)
    get_list_of_self_uploaded_documents_id_500_application_json_object: Optional[GetListOfSelfUploadedDocumentsID500ApplicationJSON] = field(default=None)
    sample: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
