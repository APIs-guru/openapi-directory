from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Fileshare:
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date') }})
    fs_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsName') }})
    host_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostPath') }})
    iops: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iops') }})
    iops_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iopsTotal') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    space_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceGuid') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_date') }})
    
