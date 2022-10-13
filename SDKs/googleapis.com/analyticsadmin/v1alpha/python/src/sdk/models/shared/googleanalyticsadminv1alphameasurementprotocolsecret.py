from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretValue' }})
    
