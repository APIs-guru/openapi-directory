from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WriteTreatmentResource:
    r"""WriteTreatmentResource
    Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
    """
    
    size_percent: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizePercent') }})
    custom_delivery_configuration: Optional[CustomDeliveryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDeliveryConfiguration') }})
    message_configuration: Optional[MessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfiguration') }})
    schedule: Optional[Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    template_configuration: Optional[TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateConfiguration') }})
    treatment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentDescription') }})
    treatment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentName') }})
    
