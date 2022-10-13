from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetListOfIssuedDocumentsVersion1IDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetListOfIssuedDocumentsVersion1IDRequest:
    security: GetListOfIssuedDocumentsVersion1IDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListOfIssuedDocumentsVersion1ID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetListOfIssuedDocumentsVersion1IDResponse:
    content_type: str = field(default=None)
    get_list_of_issued_documents_version1_id_401_application_json_object: Optional[GetListOfIssuedDocumentsVersion1ID401ApplicationJSON] = field(default=None)
    get_list_of_issued_documents_version1_id_500_application_json_one_of: Optional[Any] = field(default=None)
    sample: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
