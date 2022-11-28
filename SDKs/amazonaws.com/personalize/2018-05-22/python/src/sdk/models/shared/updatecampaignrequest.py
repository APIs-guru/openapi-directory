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
class UpdateCampaignRequest:
    campaign_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignArn') }})
    campaign_config: Optional[CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignConfig') }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minProvisionedTPS') }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    
