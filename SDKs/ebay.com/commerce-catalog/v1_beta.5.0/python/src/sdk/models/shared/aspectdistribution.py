from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aspectvaluedistribution


@dataclass_json
@dataclass
class AspectDistribution:
    aspect_value_distributions: Optional[List[aspectvaluedistribution.AspectValueDistribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectValueDistributions' }})
    localized_aspect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedAspectName' }})
    
