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
class ClusterPendingUpdates:
    r"""ClusterPendingUpdates
    A list of updates being applied to the cluster
    """
    
    ac_ls: Optional[AcLsUpdateStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLs') }})
    resharding: Optional[ReshardingStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resharding') }})
    service_updates: Optional[List[PendingModifiedServiceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUpdates') }})
    
