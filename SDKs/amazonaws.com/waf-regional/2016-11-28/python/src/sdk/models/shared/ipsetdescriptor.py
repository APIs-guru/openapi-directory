from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import ipsetdescriptortype_enum


@dataclass_json
@dataclass
class IPSetDescriptor:
    type: ipsetdescriptortype_enum.IPSetDescriptorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
