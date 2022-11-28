from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CollectionConfiguration:
    r"""CollectionConfiguration
    Configuration information for the Debugger output tensor collections.
    """
    
    collection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionName') }})
    collection_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionParameters') }})
    
