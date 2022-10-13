from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import geomatchconstrainttype_enum
from . import geomatchconstraintvalue_enum


@dataclass_json
@dataclass
class GeoMatchConstraint:
    type: geomatchconstrainttype_enum.GeoMatchConstraintTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: geomatchconstraintvalue_enum.GeoMatchConstraintValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
