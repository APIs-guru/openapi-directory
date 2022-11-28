from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeSigningPolicies:
    r"""CodeSigningPolicies
    Code signing configuration <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies\">policies</a> specify the validation failure action for signature mismatch or expiry.
    """
    
    untrusted_artifact_on_deployment: Optional[CodeSigningPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UntrustedArtifactOnDeployment') }})
    
