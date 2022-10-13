from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filelocation
from . import loggingconfiguration
from . import posixprofile
from . import executionresults
from . import servicemetadata
from . import executionstatus_enum


@dataclass_json
@dataclass
class DescribedExecution:
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    execution_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRole' }})
    initial_file_location: Optional[filelocation.FileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialFileLocation' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    posix_profile: Optional[posixprofile.PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PosixProfile' }})
    results: Optional[executionresults.ExecutionResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    service_metadata: Optional[servicemetadata.ServiceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceMetadata' }})
    status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
