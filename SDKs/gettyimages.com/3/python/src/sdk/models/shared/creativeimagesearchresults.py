from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autocorrections
from . import imagesearchitemcreative
from . import relatedsearch


@dataclass_json
@dataclass
class CreativeImageSearchResults:
    auto_corrections: Optional[autocorrections.AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_corrections' }})
    images: Optional[List[imagesearchitemcreative.ImageSearchItemCreative]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    related_searches: Optional[List[relatedsearch.RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_searches' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    
