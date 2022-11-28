from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRedshiftClusterDeferredMaintenanceWindow:
    r"""AwsRedshiftClusterDeferredMaintenanceWindow
    A time windows during which maintenance was deferred for an Amazon Redshift cluster.
    """
    
    defer_maintenance_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferMaintenanceEndTime') }})
    defer_maintenance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferMaintenanceIdentifier') }})
    defer_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferMaintenanceStartTime') }})
    
