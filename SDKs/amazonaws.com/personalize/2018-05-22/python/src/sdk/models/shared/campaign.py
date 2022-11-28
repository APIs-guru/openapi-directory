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
class Campaign:
    r"""Campaign
    Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
    """
    
    campaign_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignArn') }})
    campaign_config: Optional[CampaignConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignConfig') }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_campaign_update: Optional[CampaignUpdateSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCampaignUpdate') }})
    min_provisioned_tps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minProvisionedTPS') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
