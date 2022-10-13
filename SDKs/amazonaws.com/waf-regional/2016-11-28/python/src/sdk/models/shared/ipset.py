from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipsetdescriptor


@dataclass_json
@dataclass
class IPSet:
    ip_set_descriptors: List[ipsetdescriptor.IPSetDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSetDescriptors' }})
    ip_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSetId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
