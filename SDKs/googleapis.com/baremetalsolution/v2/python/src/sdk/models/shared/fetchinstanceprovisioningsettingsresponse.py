from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FetchInstanceProvisioningSettingsResponse:
    r"""FetchInstanceProvisioningSettingsResponse
    Response with all provisioning settings.
    """
    
    images: Optional[List[OsImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    
