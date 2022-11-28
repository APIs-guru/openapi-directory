from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceServer:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    data_replication_info: Optional[DataReplicationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationInfo') }})
    is_archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isArchived') }})
    launched_instance: Optional[LaunchedInstance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchedInstance') }})
    life_cycle: Optional[LifeCycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifeCycle') }})
    source_properties: Optional[SourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
