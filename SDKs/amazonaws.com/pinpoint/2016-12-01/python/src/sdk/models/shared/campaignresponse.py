from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import treatmentresource
from . import customdeliveryconfiguration
from . import campaignstate
from . import campaignhook
from . import campaignlimits
from . import messageconfiguration
from . import schedule
from . import campaignstate
from . import templateconfiguration


@dataclass_json
@dataclass
class CampaignResponse:
    additional_treatments: Optional[List[treatmentresource.TreatmentResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalTreatments' }})
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    custom_delivery_configuration: Optional[customdeliveryconfiguration.CustomDeliveryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDeliveryConfiguration' }})
    default_state: Optional[campaignstate.CampaignState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultState' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    holdout_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldoutPercent' }})
    hook: Optional[campaignhook.CampaignHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hook' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPaused' }})
    last_modified_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    limits: Optional[campaignlimits.CampaignLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    message_configuration: Optional[messageconfiguration.MessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    segment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    segment_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentVersion' }})
    state: Optional[campaignstate.CampaignState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    template_configuration: Optional[templateconfiguration.TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateConfiguration' }})
    treatment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentDescription' }})
    treatment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentName' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
