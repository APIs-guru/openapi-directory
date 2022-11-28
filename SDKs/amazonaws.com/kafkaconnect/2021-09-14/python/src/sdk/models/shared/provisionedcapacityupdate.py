from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisionedCapacityUpdate:
    r"""ProvisionedCapacityUpdate
    An update to a connector's fixed capacity.
    """
    
    mcu_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    worker_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    
