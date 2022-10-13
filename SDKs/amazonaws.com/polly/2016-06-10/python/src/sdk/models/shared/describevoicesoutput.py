from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import voice


@dataclass_json
@dataclass
class DescribeVoicesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    voices: Optional[List[voice.Voice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Voices' }})
    
