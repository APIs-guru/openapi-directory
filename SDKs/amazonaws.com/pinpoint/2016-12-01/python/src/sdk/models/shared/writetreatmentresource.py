from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customdeliveryconfiguration
from . import messageconfiguration
from . import schedule
from . import templateconfiguration


@dataclass_json
@dataclass
class WriteTreatmentResource:
    custom_delivery_configuration: Optional[customdeliveryconfiguration.CustomDeliveryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDeliveryConfiguration' }})
    message_configuration: Optional[messageconfiguration.MessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfiguration' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    size_percent: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizePercent' }})
    template_configuration: Optional[templateconfiguration.TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateConfiguration' }})
    treatment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentDescription' }})
    treatment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentName' }})
    
