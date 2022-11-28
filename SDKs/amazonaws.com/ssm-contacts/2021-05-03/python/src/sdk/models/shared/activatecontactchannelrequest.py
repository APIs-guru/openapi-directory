from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActivateContactChannelRequest:
    activation_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationCode') }})
    contact_channel_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelId') }})
    
