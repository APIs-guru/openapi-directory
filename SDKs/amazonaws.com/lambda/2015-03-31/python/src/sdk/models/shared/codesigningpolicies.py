from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codesigningpolicy_enum


@dataclass_json
@dataclass
class CodeSigningPolicies:
    untrusted_artifact_on_deployment: Optional[codesigningpolicy_enum.CodeSigningPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UntrustedArtifactOnDeployment' }})
    
