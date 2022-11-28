from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAppReplicationConfigurationRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    server_group_replication_configurations: Optional[List[ServerGroupReplicationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupReplicationConfigurations') }})
    
