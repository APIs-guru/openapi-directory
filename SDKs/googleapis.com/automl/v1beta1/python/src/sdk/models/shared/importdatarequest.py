from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportDataRequest:
    r"""ImportDataRequest
    Request message for AutoMl.ImportData.
    """
    
    input_config: Optional[InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    
