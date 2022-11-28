from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListedExecution:
    r"""ListedExecution
    Returns properties of the execution that is specified.
    """
    
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionId') }})
    initial_file_location: Optional[FileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialFileLocation') }})
    service_metadata: Optional[ServiceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceMetadata') }})
    status: Optional[ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
