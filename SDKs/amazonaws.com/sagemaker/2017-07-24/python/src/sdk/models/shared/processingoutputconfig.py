from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingOutputConfig:
    r"""ProcessingOutputConfig
    Configuration for uploading output from the processing container.
    """
    
    outputs: List[ProcessingOutput] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
