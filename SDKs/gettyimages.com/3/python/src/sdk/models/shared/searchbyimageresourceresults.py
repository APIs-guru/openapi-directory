from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchByImageResourceResults:
    auto_corrections: Optional[AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    facets: Optional[SearchFacetsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    image_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_fingerprint') }})
    images: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    related_searches: Optional[List[RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    
