from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfileEnvironment:
    r"""GoogleCloudApigeeV1SecurityProfileEnvironment
    Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.
    """
    
    attach_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachTime') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    
