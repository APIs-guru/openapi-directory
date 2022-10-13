from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aspectdistribution


@dataclass_json
@dataclass
class Refinement:
    aspect_distributions: Optional[List[aspectdistribution.AspectDistribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectDistributions' }})
    dominant_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dominantCategoryId' }})
    
