from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceaccessdetails


@dataclass_json
@dataclass
class GetInstanceAccessDetailsResult:
    access_details: Optional[instanceaccessdetails.InstanceAccessDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessDetails' }})
    
