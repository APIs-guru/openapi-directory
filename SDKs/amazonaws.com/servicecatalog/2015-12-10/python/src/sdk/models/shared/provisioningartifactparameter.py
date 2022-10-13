from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import parameterconstraints


@dataclass_json
@dataclass
class ProvisioningArtifactParameter:
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_no_echo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsNoEcho' }})
    parameter_constraints: Optional[parameterconstraints.ParameterConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterConstraints' }})
    parameter_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterKey' }})
    parameter_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterType' }})
    
