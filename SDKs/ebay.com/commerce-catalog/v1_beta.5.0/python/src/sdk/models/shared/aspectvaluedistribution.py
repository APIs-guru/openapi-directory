from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AspectValueDistribution:
    localized_aspect_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedAspectValue' }})
    match_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchCount' }})
    refinement_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refinementHref' }})
    
