from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchfacetsresponse
from . import relatedsearch
from . import editorialvideosearchitem


@dataclass_json
@dataclass
class EditorialVideoSearchResults:
    facets: Optional[searchfacetsresponse.SearchFacetsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    related_searches: Optional[List[relatedsearch.RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_searches' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    videos: Optional[List[editorialvideosearchitem.EditorialVideoSearchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    
