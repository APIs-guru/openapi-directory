from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendingOptions:
    r"""SendingOptions
    Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
    """
    
    sending_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    
