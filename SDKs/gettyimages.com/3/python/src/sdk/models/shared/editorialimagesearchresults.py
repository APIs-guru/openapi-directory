from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagesearchitemeditorial
from . import relatedsearch


@dataclass_json
@dataclass
class EditorialImageSearchResults:
    images: Optional[List[imagesearchitemeditorial.ImageSearchItemEditorial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    related_searches: Optional[List[relatedsearch.RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_searches' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    
