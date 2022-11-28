from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceProperties:
    r"""SourceProperties
    Source server properties.
    """
    
    cpus: Optional[List[CPU]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpus') }})
    disks: Optional[List[Disk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    identification_hints: Optional[IdentificationHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identificationHints') }})
    last_updated_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    os: Optional[Os] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    ram_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramBytes') }})
    recommended_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedInstanceType') }})
    
