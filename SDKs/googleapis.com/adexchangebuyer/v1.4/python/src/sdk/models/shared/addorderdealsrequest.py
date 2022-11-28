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
class AddOrderDealsRequest:
    deals: Optional[List[MarketplaceDeal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    proposal_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevisionNumber') }})
    update_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateAction') }})
    
