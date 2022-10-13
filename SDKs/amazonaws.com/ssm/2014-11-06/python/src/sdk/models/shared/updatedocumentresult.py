from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentdescription


@dataclass_json
@dataclass
class UpdateDocumentResult:
    document_description: Optional[documentdescription.DocumentDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentDescription' }})
    
