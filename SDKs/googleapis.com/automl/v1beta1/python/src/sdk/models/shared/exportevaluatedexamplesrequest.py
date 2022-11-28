from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportEvaluatedExamplesRequest:
    r"""ExportEvaluatedExamplesRequest
    Request message for AutoMl.ExportEvaluatedExamples.
    """
    
    output_config: Optional[ExportEvaluatedExamplesOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
