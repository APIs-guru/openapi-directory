from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import applicationrestoretype_enum


@dataclass_json
@dataclass
class ApplicationRestoreConfiguration:
    application_restore_type: applicationrestoretype_enum.ApplicationRestoreTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationRestoreType' }})
    snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotName' }})
    
