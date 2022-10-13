from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaignconfig
from . import campaignupdatesummary


@dataclass_json
@dataclass
class Campaign:
    campaign_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignArn' }})
    campaign_config: Optional[campaignconfig.CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignConfig' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_campaign_update: Optional[campaignupdatesummary.CampaignUpdateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestCampaignUpdate' }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minProvisionedTPS' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
