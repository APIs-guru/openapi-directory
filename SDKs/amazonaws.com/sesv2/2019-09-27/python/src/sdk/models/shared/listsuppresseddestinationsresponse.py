from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSuppressedDestinationsResponse:
    r"""ListSuppressedDestinationsResponse
    A list of suppressed email addresses.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    suppressed_destination_summaries: Optional[List[SuppressedDestinationSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressedDestinationSummaries') }})
    
