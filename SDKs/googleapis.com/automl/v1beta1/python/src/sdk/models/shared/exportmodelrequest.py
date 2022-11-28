from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportModelRequest:
    r"""ExportModelRequest
    Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.
    """
    
    output_config: Optional[ModelExportOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
