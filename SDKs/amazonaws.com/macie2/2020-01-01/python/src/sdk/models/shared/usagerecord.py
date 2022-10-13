from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usagebyaccount


@dataclass_json
@dataclass
class UsageRecord:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    free_trial_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeTrialStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage: Optional[List[usagebyaccount.UsageByAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    
