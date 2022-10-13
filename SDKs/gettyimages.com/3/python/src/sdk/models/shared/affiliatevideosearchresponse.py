from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autocorrections
from . import affiliatevideo


@dataclass_json
@dataclass
class AffiliateVideoSearchResponse:
    auto_corrections: Optional[autocorrections.AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_corrections' }})
    videos: Optional[List[affiliatevideo.AffiliateVideo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    
