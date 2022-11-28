from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribedExecution:
    r"""DescribedExecution
    The details for an execution object.
    """
    
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionId') }})
    execution_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRole') }})
    initial_file_location: Optional[FileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialFileLocation') }})
    logging_configuration: Optional[LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingConfiguration') }})
    posix_profile: Optional[PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    results: Optional[ExecutionResults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    service_metadata: Optional[ServiceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceMetadata') }})
    status: Optional[ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
