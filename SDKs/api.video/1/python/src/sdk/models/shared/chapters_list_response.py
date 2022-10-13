from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chapter
from . import pagination


@dataclass_json
@dataclass
class ChaptersListResponse:
    data: Optional[List[chapter.Chapter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
