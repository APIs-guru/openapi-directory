from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformProcessingConfig:
    r"""TransformProcessingConfig
    The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
    """
    
    compute_location: ComputeLocationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeLocation') }})
    forwarding_config: Optional[ForwardingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingConfig') }})
    
