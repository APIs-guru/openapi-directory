from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import fieldtomatch
from . import texttransformation_enum


@dataclass_json
@dataclass
class RegexMatchTuple:
    field_to_match: fieldtomatch.FieldToMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldToMatch' }})
    regex_pattern_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexPatternSetId' }})
    text_transformation: texttransformation_enum.TextTransformationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextTransformation' }})
    
