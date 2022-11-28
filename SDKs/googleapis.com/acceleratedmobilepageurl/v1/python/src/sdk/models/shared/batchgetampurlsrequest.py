from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BatchGetAmpUrlsRequestLookupStrategyEnum(str, Enum):
    FETCH_LIVE_DOC = "FETCH_LIVE_DOC"
    IN_INDEX_DOC = "IN_INDEX_DOC"


@dataclass_json
@dataclass
class BatchGetAmpUrlsRequest:
    r"""BatchGetAmpUrlsRequest
    AMP URL request for a batch of URLs.
    """
    
    lookup_strategy: Optional[BatchGetAmpUrlsRequestLookupStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupStrategy') }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
