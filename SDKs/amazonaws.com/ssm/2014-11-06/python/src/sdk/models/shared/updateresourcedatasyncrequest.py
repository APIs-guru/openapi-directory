from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateResourceDataSyncRequest:
    sync_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncName') }})
    sync_source: ResourceDataSyncSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSource') }})
    sync_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncType') }})
    
