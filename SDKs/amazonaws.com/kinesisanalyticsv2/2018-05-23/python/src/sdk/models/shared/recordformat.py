from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mappingparameters
from . import recordformattype_enum


@dataclass_json
@dataclass
class RecordFormat:
    mapping_parameters: Optional[mappingparameters.MappingParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MappingParameters' }})
    record_format_type: recordformattype_enum.RecordFormatTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordFormatType' }})
    
