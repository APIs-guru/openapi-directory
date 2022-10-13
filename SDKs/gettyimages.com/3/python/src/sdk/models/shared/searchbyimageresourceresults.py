from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import autocorrections
from . import searchfacetsresponse
from . import relatedsearch


@dataclass_json
@dataclass
class SearchByImageResourceResults:
    auto_corrections: Optional[autocorrections.AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_corrections' }})
    facets: Optional[searchfacetsresponse.SearchFacetsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    image_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_fingerprint' }})
    images: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    related_searches: Optional[List[relatedsearch.RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_searches' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    
