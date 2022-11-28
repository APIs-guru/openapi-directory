from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateMetadataArguments:
    r"""UpdateMetadataArguments
    Identifies metadata updates to one device.
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_identifier: Optional[DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    device_metadata: Optional[DeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    
