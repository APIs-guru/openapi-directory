from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullDocumentIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PullDocumentID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class PullDocumentID404ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class PullDocumentIDRequest:
    security: PullDocumentIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PullDocumentIDResponse:
    content_type: str = field()
    status_code: int = field()
    pull_document_id_400_application_json_one_of: Optional[Any] = field(default=None)
    pull_document_id_401_application_json_object: Optional[PullDocumentID401ApplicationJSON] = field(default=None)
    pull_document_id_404_application_json_object: Optional[PullDocumentID404ApplicationJSON] = field(default=None)
    pull_document_id_500_application_json_one_of: Optional[Any] = field(default=None)
    sample: Optional[Any] = field(default=None)
    
