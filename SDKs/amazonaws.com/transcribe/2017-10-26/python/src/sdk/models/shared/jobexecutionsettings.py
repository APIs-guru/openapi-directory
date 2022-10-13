from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobExecutionSettings:
    allow_deferred_execution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowDeferredExecution' }})
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    
