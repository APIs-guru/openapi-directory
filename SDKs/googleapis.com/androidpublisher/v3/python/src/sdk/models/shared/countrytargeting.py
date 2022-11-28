from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CountryTargeting:
    r"""CountryTargeting
    Country targeting specification.
    """
    
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    include_rest_of_world: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeRestOfWorld') }})
    
