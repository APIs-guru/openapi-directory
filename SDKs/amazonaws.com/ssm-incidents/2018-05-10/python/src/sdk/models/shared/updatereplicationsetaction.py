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
class UpdateReplicationSetAction:
    r"""UpdateReplicationSetAction
    Details used when updating the replication set.
    """
    
    add_region_action: Optional[AddRegionAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addRegionAction') }})
    delete_region_action: Optional[DeleteRegionAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRegionAction') }})
    
