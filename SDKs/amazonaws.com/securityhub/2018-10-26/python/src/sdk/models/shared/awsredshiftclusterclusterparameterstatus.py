from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterParameterStatus:
    parameter_apply_error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterApplyErrorDescription' }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterApplyStatus' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterName' }})
    
