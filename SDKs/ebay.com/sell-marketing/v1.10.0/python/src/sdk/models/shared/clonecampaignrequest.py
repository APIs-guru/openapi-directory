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
class CloneCampaignRequest:
    r"""CloneCampaignRequest
    This type defines the fields needed for a clone-campaign request.
    """
    
    campaign_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignName') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    funding_strategy: Optional[FundingStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStrategy') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
