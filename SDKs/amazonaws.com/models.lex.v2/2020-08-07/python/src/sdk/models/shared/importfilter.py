from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import importfiltername_enum
from . import importfilteroperator_enum


@dataclass_json
@dataclass
class ImportFilter:
    name: importfiltername_enum.ImportFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: importfilteroperator_enum.ImportFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
