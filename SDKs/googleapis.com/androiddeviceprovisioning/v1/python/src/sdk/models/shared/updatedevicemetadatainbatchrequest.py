from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatemetadataarguments


@dataclass_json
@dataclass
class UpdateDeviceMetadataInBatchRequest:
    updates: Optional[List[updatemetadataarguments.UpdateMetadataArguments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updates' }})
    
