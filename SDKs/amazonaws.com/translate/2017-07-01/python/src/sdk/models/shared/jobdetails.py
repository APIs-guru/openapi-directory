from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobDetails:
    documents_with_errors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentsWithErrorsCount' }})
    input_documents_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDocumentsCount' }})
    translated_documents_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslatedDocumentsCount' }})
    
