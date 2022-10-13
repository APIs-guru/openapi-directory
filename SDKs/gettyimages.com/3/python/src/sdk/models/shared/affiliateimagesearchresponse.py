from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autocorrections
from . import affiliateimage


@dataclass_json
@dataclass
class AffiliateImageSearchResponse:
    auto_corrections: Optional[autocorrections.AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_corrections' }})
    images: Optional[List[affiliateimage.AffiliateImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    
