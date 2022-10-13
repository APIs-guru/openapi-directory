from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrphototextelement
from . import formfielddefinition


@dataclass_json
@dataclass
class FieldResult:
    field_values: Optional[List[ocrphototextelement.OcrPhotoTextElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldValues' }})
    target_field: Optional[formfielddefinition.FormFieldDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetField' }})
    
