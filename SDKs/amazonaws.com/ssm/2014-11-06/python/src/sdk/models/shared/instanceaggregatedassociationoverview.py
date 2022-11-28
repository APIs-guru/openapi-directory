from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceAggregatedAssociationOverview:
    r"""InstanceAggregatedAssociationOverview
    Status information about the aggregated associations.
    """
    
    detailed_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailedStatus') }})
    instance_association_status_aggregated_count: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAssociationStatusAggregatedCount') }})
    
