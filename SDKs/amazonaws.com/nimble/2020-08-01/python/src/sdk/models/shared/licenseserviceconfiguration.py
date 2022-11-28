from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LicenseServiceConfiguration:
    r"""LicenseServiceConfiguration
    The configuration for a license service that is associated with a studio resource.
    """
    
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    
