from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Command' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interval' }})
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Retries' }})
    start_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPeriod' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    
