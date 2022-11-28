from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CanaryCodeOutput:
    r"""CanaryCodeOutput
    This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
    """
    
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    source_location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLocationArn') }})
    
