from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterDeferredMaintenanceWindow:
    defer_maintenance_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeferMaintenanceEndTime' }})
    defer_maintenance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeferMaintenanceIdentifier' }})
    defer_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeferMaintenanceStartTime' }})
    
