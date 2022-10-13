from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AspectRecommendations:
    localized_aspect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedAspectName' }})
    suggested_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedValues' }})
    
