from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListConfigurationSetsResponse:
    r"""ListConfigurationSetsResponse
    A list of configuration sets in your Amazon SES account in the current AWS Region.
    """
    
    configuration_sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSets') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
