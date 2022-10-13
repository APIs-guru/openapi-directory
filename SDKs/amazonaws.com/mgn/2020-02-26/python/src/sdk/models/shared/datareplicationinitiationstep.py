from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datareplicationinitiationstepname_enum
from . import datareplicationinitiationstepstatus_enum


@dataclass_json
@dataclass
class DataReplicationInitiationStep:
    name: Optional[datareplicationinitiationstepname_enum.DataReplicationInitiationStepNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[datareplicationinitiationstepstatus_enum.DataReplicationInitiationStepStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
