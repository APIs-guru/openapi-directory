from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProvisioningParametersOutput:
    constraint_summaries: Optional[List[ConstraintSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintSummaries') }})
    provisioning_artifact_outputs: Optional[List[ProvisioningArtifactOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactOutputs') }})
    provisioning_artifact_parameters: Optional[List[ProvisioningArtifactParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactParameters') }})
    provisioning_artifact_preferences: Optional[ProvisioningArtifactPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactPreferences') }})
    tag_options: Optional[List[TagOptionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptions') }})
    usage_instructions: Optional[List[UsageInstruction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageInstructions') }})
    
