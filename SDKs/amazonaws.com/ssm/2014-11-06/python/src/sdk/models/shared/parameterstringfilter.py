from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParameterStringFilter:
    r"""ParameterStringFilter
    One or more filters. Use a filter to return a more specific list of results.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Option') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
