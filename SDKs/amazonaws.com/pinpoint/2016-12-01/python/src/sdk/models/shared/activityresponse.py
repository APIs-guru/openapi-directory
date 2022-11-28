from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActivityResponse:
    r"""ActivityResponse
    Provides information about an activity that was performed by a campaign.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    campaign_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('End') }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    scheduled_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledStart') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Start') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    successful_endpoint_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulEndpointCount') }})
    timezones_completed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimezonesCompletedCount') }})
    timezones_total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimezonesTotalCount') }})
    total_endpoint_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalEndpointCount') }})
    treatment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentId') }})
    
