from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvChangeMarketingRequest:
    email_opt_in: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailOptIn') }})
    profile_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileToken') }})
    
