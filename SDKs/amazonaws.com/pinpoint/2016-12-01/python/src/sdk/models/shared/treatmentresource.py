from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customdeliveryconfiguration
from . import messageconfiguration
from . import schedule
from . import campaignstate
from . import templateconfiguration


@dataclass_json
@dataclass
class TreatmentResource:
    custom_delivery_configuration: Optional[customdeliveryconfiguration.CustomDeliveryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDeliveryConfiguration' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    message_configuration: Optional[messageconfiguration.MessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfiguration' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    size_percent: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizePercent' }})
    state: Optional[campaignstate.CampaignState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    template_configuration: Optional[templateconfiguration.TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateConfiguration' }})
    treatment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentDescription' }})
    treatment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentName' }})
    
