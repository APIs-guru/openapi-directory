from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1violationremediationinstructionsconsole
from . import googlecloudassuredworkloadsv1violationremediationinstructionsgcloud


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions:
    console_instructions: Optional[googlecloudassuredworkloadsv1violationremediationinstructionsconsole.GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consoleInstructions' }})
    gcloud_instructions: Optional[googlecloudassuredworkloadsv1violationremediationinstructionsgcloud.GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcloudInstructions' }})
    
