from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taggeddatabase


@dataclass_json
@dataclass
class SearchDatabasesByLfTagsResponse:
    database_list: Optional[List[taggeddatabase.TaggedDatabase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
