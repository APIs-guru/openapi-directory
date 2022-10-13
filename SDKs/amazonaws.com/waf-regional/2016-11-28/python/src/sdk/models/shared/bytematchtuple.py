from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import fieldtomatch
from . import positionalconstraint_enum
from . import texttransformation_enum


@dataclass_json
@dataclass
class ByteMatchTuple:
    field_to_match: fieldtomatch.FieldToMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldToMatch' }})
    positional_constraint: positionalconstraint_enum.PositionalConstraintEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PositionalConstraint' }})
    target_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetString' }})
    text_transformation: texttransformation_enum.TextTransformationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextTransformation' }})
    
