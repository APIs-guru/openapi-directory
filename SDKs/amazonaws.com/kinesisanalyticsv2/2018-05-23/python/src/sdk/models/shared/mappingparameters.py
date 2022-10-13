from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import csvmappingparameters
from . import jsonmappingparameters


@dataclass_json
@dataclass
class MappingParameters:
    csv_mapping_parameters: Optional[csvmappingparameters.CsvMappingParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CSVMappingParameters' }})
    json_mapping_parameters: Optional[jsonmappingparameters.JSONMappingParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JSONMappingParameters' }})
    
