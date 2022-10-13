from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import awsmanagedhumanlooprequestsource_enum


@dataclass_json
@dataclass
class HumanLoopRequestSource:
    aws_managed_human_loop_request_source: awsmanagedhumanlooprequestsource_enum.AwsManagedHumanLoopRequestSourceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsManagedHumanLoopRequestSource' }})
    
