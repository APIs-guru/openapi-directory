from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentdefaultversiondescription


@dataclass_json
@dataclass
class UpdateDocumentDefaultVersionResult:
    description: Optional[documentdefaultversiondescription.DocumentDefaultVersionDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    
