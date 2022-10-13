from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import ipsetdescriptor


@dataclass_json
@dataclass
class IPSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    ip_set_descriptor: ipsetdescriptor.IPSetDescriptor = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSetDescriptor' }})
    
