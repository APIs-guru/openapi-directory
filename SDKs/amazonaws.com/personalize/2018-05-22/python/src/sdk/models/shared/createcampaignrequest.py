from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaignconfig


@dataclass_json
@dataclass
class CreateCampaignRequest:
    campaign_config: Optional[campaignconfig.CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignConfig' }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minProvisionedTPS' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    solution_version_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    
