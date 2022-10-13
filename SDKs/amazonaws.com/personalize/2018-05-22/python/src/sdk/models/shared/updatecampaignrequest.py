from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaignconfig


@dataclass_json
@dataclass
class UpdateCampaignRequest:
    campaign_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignArn' }})
    campaign_config: Optional[campaignconfig.CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignConfig' }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minProvisionedTPS' }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    
