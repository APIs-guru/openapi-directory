from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import exportfiltername_enum
from . import exportfilteroperator_enum


@dataclass_json
@dataclass
class ExportFilter:
    name: exportfiltername_enum.ExportFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: exportfilteroperator_enum.ExportFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
