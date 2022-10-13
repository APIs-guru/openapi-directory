from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filelocation
from . import servicemetadata
from . import executionstatus_enum


@dataclass_json
@dataclass
class ListedExecution:
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    initial_file_location: Optional[filelocation.FileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialFileLocation' }})
    service_metadata: Optional[servicemetadata.ServiceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceMetadata' }})
    status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
