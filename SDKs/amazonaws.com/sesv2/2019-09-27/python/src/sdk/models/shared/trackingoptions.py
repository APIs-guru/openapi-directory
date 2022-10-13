from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrackingOptions:
    custom_redirect_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomRedirectDomain' }})
    
