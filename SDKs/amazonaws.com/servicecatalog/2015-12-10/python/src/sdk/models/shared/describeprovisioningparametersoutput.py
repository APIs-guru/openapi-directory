from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import constraintsummary
from . import provisioningartifactoutput
from . import provisioningartifactparameter
from . import provisioningartifactpreferences
from . import tagoptionsummary
from . import usageinstruction


@dataclass_json
@dataclass
class DescribeProvisioningParametersOutput:
    constraint_summaries: Optional[List[constraintsummary.ConstraintSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintSummaries' }})
    provisioning_artifact_outputs: Optional[List[provisioningartifactoutput.ProvisioningArtifactOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactOutputs' }})
    provisioning_artifact_parameters: Optional[List[provisioningartifactparameter.ProvisioningArtifactParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactParameters' }})
    provisioning_artifact_preferences: Optional[provisioningartifactpreferences.ProvisioningArtifactPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactPreferences' }})
    tag_options: Optional[List[tagoptionsummary.TagOptionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagOptions' }})
    usage_instructions: Optional[List[usageinstruction.UsageInstruction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageInstructions' }})
    
