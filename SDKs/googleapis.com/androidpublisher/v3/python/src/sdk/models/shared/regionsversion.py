from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegionsVersion:
    r"""RegionsVersion
    The version of the available regions being used for the specified resource.
    """
    
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
