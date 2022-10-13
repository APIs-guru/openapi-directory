from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivityResponse:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    campaign_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignId' }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'End' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    scheduled_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledStart' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Start' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    successful_endpoint_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessfulEndpointCount' }})
    timezones_completed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimezonesCompletedCount' }})
    timezones_total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimezonesTotalCount' }})
    total_endpoint_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalEndpointCount' }})
    treatment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentId' }})
    
