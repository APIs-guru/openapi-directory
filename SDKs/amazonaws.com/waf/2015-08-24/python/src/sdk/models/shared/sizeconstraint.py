from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import fieldtomatch
from . import texttransformation_enum


@dataclass_json
@dataclass
class SizeConstraint:
    comparison_operator: comparisonoperator_enum.ComparisonOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    field_to_match: fieldtomatch.FieldToMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldToMatch' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    text_transformation: texttransformation_enum.TextTransformationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextTransformation' }})
    
