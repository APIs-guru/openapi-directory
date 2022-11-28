from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoteSink:
    bond_date: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bond_date') }})
    device_class: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_class') }})
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    last_connect_date: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_connect_date') }})
    mac_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rssi: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rssi') }})
    service_uuids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_uuids') }})
    
