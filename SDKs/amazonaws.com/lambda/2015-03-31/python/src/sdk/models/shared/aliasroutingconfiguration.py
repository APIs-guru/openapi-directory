from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AliasRoutingConfiguration:
    additional_version_weights: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalVersionWeights' }})
    
