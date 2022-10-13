from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dpc


@dataclass_json
@dataclass
class CustomerListDpcsResponse:
    dpcs: Optional[List[dpc.Dpc]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dpcs' }})
    
