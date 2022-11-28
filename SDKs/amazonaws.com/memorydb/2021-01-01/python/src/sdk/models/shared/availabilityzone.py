from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
