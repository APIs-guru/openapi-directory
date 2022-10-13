from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activemetricrestriction


@dataclass_json
@dataclass
class SchemaRestrictionResponse:
    active_metric_restrictions: Optional[List[activemetricrestriction.ActiveMetricRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeMetricRestrictions' }})
    
