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
class CreateCampaignRequest:
    r"""CreateCampaignRequest
    This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
    """
    
    campaign_criterion: Optional[CampaignCriterion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignCriterion') }})
    campaign_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignName') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    funding_strategy: Optional[FundingStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStrategy') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
