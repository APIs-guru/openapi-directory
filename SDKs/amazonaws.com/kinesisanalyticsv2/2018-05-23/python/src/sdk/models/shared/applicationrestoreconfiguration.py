from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationRestoreConfiguration:
    r"""ApplicationRestoreConfiguration
    Specifies the method and snapshot to use when restarting an application using previously saved application state.
    """
    
    application_restore_type: ApplicationRestoreTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreType') }})
    snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    
