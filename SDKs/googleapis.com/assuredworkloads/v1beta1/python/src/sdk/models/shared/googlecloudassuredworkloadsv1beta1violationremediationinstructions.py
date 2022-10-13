from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1beta1violationremediationinstructionsconsole
from . import googlecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions:
    console_instructions: Optional[googlecloudassuredworkloadsv1beta1violationremediationinstructionsconsole.GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consoleInstructions' }})
    gcloud_instructions: Optional[googlecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud.GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcloudInstructions' }})
    
