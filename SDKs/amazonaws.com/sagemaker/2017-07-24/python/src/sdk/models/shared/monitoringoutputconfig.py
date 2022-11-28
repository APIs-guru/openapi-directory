from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringOutputConfig:
    r"""MonitoringOutputConfig
    The output configuration for monitoring jobs.
    """
    
    monitoring_outputs: List[MonitoringOutput] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringOutputs') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
