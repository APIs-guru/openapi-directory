from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import definitiondocument


@dataclass_json
@dataclass
class UpdateSystemTemplateRequest:
    compatible_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibleNamespaceVersion' }})
    definition: definitiondocument.DefinitionDocument = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
