from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParquetOptions:
    enable_list_inference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableListInference' }})
    enum_as_string: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumAsString' }})
    
