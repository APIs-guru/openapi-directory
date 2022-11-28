from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SetAddonsRequestInput:
    r"""GoogleCloudApigeeV1SetAddonsRequestInput
    Request for SetAddons.
    """
    
    addons_config: Optional[GoogleCloudApigeeV1AddonsConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonsConfig') }})
    
