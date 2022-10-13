from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ipset


@dataclass_json
@dataclass
class GetIPSetResponse:
    ip_set: Optional[ipset.IPSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSet' }})
    
