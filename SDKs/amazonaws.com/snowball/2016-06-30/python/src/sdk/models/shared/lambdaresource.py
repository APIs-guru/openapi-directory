from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaResource:
    r"""LambdaResource
    Identifies 
    """
    
    event_triggers: Optional[List[EventTriggerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTriggers') }})
    lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    
