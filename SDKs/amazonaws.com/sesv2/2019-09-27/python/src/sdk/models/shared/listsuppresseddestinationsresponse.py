from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suppresseddestinationsummary


@dataclass_json
@dataclass
class ListSuppressedDestinationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    suppressed_destination_summaries: Optional[List[suppresseddestinationsummary.SuppressedDestinationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressedDestinationSummaries' }})
    
