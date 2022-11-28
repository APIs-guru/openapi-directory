from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret:
    r"""GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret
    A secret value used for sending hits to Measurement Protocol.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretValue') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput:
    r"""GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput
    A secret value used for sending hits to Measurement Protocol.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
