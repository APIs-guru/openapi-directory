from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import forwardingconfigstate_enum


@dataclass_json
@dataclass
class ForwardingConfig:
    state: forwardingconfigstate_enum.ForwardingConfigStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
