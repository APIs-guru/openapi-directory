from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputconfig


@dataclass_json
@dataclass
class ImportDataRequest:
    input_config: Optional[inputconfig.InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    
