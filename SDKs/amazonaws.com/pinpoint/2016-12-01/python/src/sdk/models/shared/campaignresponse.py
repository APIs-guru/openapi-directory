from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignResponse:
    r"""CampaignResponse
    Provides information about the status, configuration, and other settings for a campaign.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creation_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    last_modified_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    segment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    segment_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentVersion') }})
    additional_treatments: Optional[List[TreatmentResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalTreatments') }})
    custom_delivery_configuration: Optional[CustomDeliveryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDeliveryConfiguration') }})
    default_state: Optional[CampaignState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultState') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    holdout_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldoutPercent') }})
    hook: Optional[CampaignHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hook') }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaused') }})
    limits: Optional[CampaignLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    message_configuration: Optional[MessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    schedule: Optional[Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    state: Optional[CampaignState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    template_configuration: Optional[TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateConfiguration') }})
    treatment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentDescription') }})
    treatment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentName') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
