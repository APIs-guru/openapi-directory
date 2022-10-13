from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import fieldnamestring_enum


@dataclass_json
@dataclass
class FilterCondition:
    comparison_operator: Optional[comparisonoperator_enum.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    field: Optional[fieldnamestring_enum.FieldNameStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Field' }})
    string_value_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringValueList' }})
    
