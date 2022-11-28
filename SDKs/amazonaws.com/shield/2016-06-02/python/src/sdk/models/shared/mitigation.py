from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Mitigation:
    r"""Mitigation
    The mitigation applied to a DDoS attack.
    """
    
    mitigation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MitigationName') }})
    
