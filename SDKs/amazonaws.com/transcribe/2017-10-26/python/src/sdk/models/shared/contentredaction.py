from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import redactionoutput_enum
from . import redactiontype_enum


@dataclass_json
@dataclass
class ContentRedaction:
    redaction_output: redactionoutput_enum.RedactionOutputEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedactionOutput' }})
    redaction_type: redactiontype_enum.RedactionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedactionType' }})
    
