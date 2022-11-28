from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayCapabilitySummary:
    r"""GatewayCapabilitySummary
    Contains a summary of a gateway capability configuration.
    """
    
    capability_namespace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilityNamespace') }})
    capability_sync_status: CapabilitySyncStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilitySyncStatus') }})
    
