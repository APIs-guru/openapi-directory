from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import input
from . import output
from . import referencedatasource


@dataclass_json
@dataclass
class SQLApplicationConfiguration:
    inputs: Optional[List[input.Input]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inputs' }})
    outputs: Optional[List[output.Output]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    reference_data_sources: Optional[List[referencedatasource.ReferenceDataSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceDataSources' }})
    
