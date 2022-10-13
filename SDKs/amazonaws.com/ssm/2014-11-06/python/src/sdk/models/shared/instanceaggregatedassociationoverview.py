from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceAggregatedAssociationOverview:
    detailed_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedStatus' }})
    instance_association_status_aggregated_count: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceAssociationStatusAggregatedCount' }})
    
