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
class BatchUpdateClusterRequest:
    cluster_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterNames') }})
    service_update: Optional[ServiceUpdateRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUpdate') }})
    
