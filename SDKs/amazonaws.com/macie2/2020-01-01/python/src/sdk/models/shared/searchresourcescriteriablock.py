from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchresourcescriteria


@dataclass_json
@dataclass
class SearchResourcesCriteriaBlock:
    and_: Optional[List[searchresourcescriteria.SearchResourcesCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'and' }})
    
