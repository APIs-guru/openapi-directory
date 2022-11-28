from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings:
    r"""GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings
    Settings specific to resources needed for IL4.
    """
    
    kms_settings: Optional[GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsSettings') }})
    
