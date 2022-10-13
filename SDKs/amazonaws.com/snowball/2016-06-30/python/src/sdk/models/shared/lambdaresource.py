from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventtriggerdefinition


@dataclass_json
@dataclass
class LambdaResource:
    event_triggers: Optional[List[eventtriggerdefinition.EventTriggerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTriggers' }})
    lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaArn' }})
    
