from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recordoutput


@dataclass_json
@dataclass
class GetProvisionedProductOutputsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    outputs: Optional[List[recordoutput.RecordOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    
