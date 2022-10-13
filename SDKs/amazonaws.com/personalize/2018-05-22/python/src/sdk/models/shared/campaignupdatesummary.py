from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaignconfig


@dataclass_json
@dataclass
class CampaignUpdateSummary:
    campaign_config: Optional[campaignconfig.CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignConfig' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minProvisionedTPS' }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
