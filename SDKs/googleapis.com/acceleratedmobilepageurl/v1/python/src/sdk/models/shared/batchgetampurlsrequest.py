from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class BatchGetAmpUrlsRequestLookupStrategyEnum(str, Enum):
    FETCH_LIVE_DOC = "FETCH_LIVE_DOC"
    IN_INDEX_DOC = "IN_INDEX_DOC"


@dataclass_json
@dataclass
class BatchGetAmpUrlsRequest:
    lookup_strategy: Optional[BatchGetAmpUrlsRequestLookupStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookupStrategy' }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    
