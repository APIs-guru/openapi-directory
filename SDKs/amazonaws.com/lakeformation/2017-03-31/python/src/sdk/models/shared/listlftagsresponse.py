from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lftagpair


@dataclass_json
@dataclass
class ListLfTagsResponse:
    lf_tags: Optional[List[lftagpair.LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTags' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
