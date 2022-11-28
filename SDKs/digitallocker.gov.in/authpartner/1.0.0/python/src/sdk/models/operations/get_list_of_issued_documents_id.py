from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetListOfIssuedDocumentsID200ApplicationJSON:
    items: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class GetListOfIssuedDocumentsID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetListOfIssuedDocumentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_list_of_issued_documents_id_200_application_json_object: Optional[GetListOfIssuedDocumentsID200ApplicationJSON] = field(default=None)
    get_list_of_issued_documents_id_401_application_json_object: Optional[GetListOfIssuedDocumentsID401ApplicationJSON] = field(default=None)
    get_list_of_issued_documents_id_500_application_json_one_of: Optional[Any] = field(default=None)
    
