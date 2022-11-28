from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud:
    r"""GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud
    Remediation instructions to resolve violation via gcloud cli
    """
    
    additional_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLinks') }})
    gcloud_commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcloudCommands') }})
    steps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
