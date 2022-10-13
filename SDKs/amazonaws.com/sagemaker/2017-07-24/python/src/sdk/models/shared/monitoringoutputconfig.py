from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringoutput


@dataclass_json
@dataclass
class MonitoringOutputConfig:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    monitoring_outputs: List[monitoringoutput.MonitoringOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringOutputs' }})
    
