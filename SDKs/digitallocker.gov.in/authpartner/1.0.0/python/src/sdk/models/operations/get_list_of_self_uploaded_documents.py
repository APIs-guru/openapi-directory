from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetListOfSelfUploadedDocumentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetListOfSelfUploadedDocumentsRequest:
    security: GetListOfSelfUploadedDocumentsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocuments401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocuments404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetListOfSelfUploadedDocuments500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetListOfSelfUploadedDocumentsResponse:
    content_type: str = field(default=None)
    get_list_of_self_uploaded_documents_401_application_json_object: Optional[GetListOfSelfUploadedDocuments401ApplicationJSON] = field(default=None)
    get_list_of_self_uploaded_documents_404_application_json_object: Optional[GetListOfSelfUploadedDocuments404ApplicationJSON] = field(default=None)
    get_list_of_self_uploaded_documents_500_application_json_object: Optional[GetListOfSelfUploadedDocuments500ApplicationJSON] = field(default=None)
    sample: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
