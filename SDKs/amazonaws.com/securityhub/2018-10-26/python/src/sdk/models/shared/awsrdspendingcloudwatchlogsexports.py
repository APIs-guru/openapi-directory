from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsPendingCloudWatchLogsExports:
    log_types_to_disable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogTypesToDisable' }})
    log_types_to_enable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogTypesToEnable' }})
    
