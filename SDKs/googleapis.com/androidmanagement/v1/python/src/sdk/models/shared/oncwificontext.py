from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OncWifiContext:
    r"""OncWifiContext
    Additional context for non-compliance related to Wi-Fi configuration.
    """
    
    wifi_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiGuid') }})
    
