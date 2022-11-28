from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceActionDetail:
    r"""ServiceActionDetail
    An object containing detailed information about the self-service action.
    """
    
    definition: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    service_action_summary: Optional[ServiceActionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionSummary') }})
    
