from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRegionsRequest:
    include_availability_zones: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeAvailabilityZones' }})
    include_relational_database_availability_zones: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeRelationalDatabaseAvailabilityZones' }})
    
