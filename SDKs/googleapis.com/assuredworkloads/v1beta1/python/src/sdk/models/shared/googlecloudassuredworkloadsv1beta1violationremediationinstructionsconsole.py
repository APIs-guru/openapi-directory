from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole:
    r"""GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole
    Remediation instructions to resolve violation via cloud console
    """
    
    additional_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLinks') }})
    console_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consoleUris') }})
    steps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
