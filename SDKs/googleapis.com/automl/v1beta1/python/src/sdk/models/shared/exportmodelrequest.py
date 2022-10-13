from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import modelexportoutputconfig


@dataclass_json
@dataclass
class ExportModelRequest:
    output_config: Optional[modelexportoutputconfig.ModelExportOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
