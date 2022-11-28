from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteRegionAction:
    r"""DeleteRegionAction
    Defines the information about the Region you're deleting from your replication set.
    """
    
    region_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    
