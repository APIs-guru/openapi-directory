from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvChangeMarketingRequest:
    email_opt_in: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailOptIn' }})
    profile_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileToken' }})
    
