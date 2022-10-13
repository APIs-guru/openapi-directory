from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autocorrections
from . import searchfacetsresponse
from . import relatedsearch
from . import creativevideosearchitem


@dataclass_json
@dataclass
class CreativeVideoSearchResults:
    auto_corrections: Optional[autocorrections.AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_corrections' }})
    facets: Optional[searchfacetsresponse.SearchFacetsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    related_searches: Optional[List[relatedsearch.RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_searches' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    videos: Optional[List[creativevideosearchitem.CreativeVideoSearchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    
