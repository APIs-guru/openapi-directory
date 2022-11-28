from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions:
    r"""GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions
    Instructions to remediate violation
    """
    
    console_instructions: Optional[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consoleInstructions') }})
    gcloud_instructions: Optional[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcloudInstructions') }})
    
