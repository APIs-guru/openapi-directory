from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutputSource:
    r"""OutputSource
    Information about the source where the association execution details are stored.
    """
    
    output_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputSourceId') }})
    output_source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputSourceType') }})
    
