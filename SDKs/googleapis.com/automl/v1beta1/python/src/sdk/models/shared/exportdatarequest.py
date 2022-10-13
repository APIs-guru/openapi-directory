from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import outputconfig


@dataclass_json
@dataclass
class ExportDataRequest:
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
