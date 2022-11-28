from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetListOfIssuedDocumentsVersion1IDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetListOfIssuedDocumentsVersion1ID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetListOfIssuedDocumentsVersion1IDRequest:
    security: GetListOfIssuedDocumentsVersion1IDSecurity = field()
    

@dataclass
class GetListOfIssuedDocumentsVersion1IDResponse:
    content_type: str = field()
    status_code: int = field()
    get_list_of_issued_documents_version1_id_401_application_json_object: Optional[GetListOfIssuedDocumentsVersion1ID401ApplicationJSON] = field(default=None)
    get_list_of_issued_documents_version1_id_500_application_json_one_of: Optional[Any] = field(default=None)
    sample: Optional[Any] = field(default=None)
    
