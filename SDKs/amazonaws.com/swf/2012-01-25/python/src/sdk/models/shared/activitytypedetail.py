from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import activitytypeconfiguration
from . import activitytypeinfo


@dataclass_json
@dataclass
class ActivityTypeDetail:
    configuration: activitytypeconfiguration.ActivityTypeConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    type_info: activitytypeinfo.ActivityTypeInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeInfo' }})
    
