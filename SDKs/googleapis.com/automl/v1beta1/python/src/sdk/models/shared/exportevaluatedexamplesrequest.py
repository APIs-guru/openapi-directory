from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import exportevaluatedexamplesoutputconfig


@dataclass_json
@dataclass
class ExportEvaluatedExamplesRequest:
    output_config: Optional[exportevaluatedexamplesoutputconfig.ExportEvaluatedExamplesOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
