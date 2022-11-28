from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCampaignRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    solution_version_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    campaign_config: Optional[CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignConfig') }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minProvisionedTPS') }})
    
