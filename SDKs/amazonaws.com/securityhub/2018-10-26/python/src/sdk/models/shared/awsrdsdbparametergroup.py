from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsDbParameterGroup:
    db_parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbParameterGroupName' }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterApplyStatus' }})
    
