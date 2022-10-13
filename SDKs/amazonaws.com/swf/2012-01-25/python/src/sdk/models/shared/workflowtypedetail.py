from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workflowtypeconfiguration
from . import workflowtypeinfo


@dataclass_json
@dataclass
class WorkflowTypeDetail:
    configuration: workflowtypeconfiguration.WorkflowTypeConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    type_info: workflowtypeinfo.WorkflowTypeInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeInfo' }})
    
