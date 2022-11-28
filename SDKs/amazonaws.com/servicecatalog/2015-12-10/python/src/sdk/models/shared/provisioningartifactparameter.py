from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisioningArtifactParameter:
    r"""ProvisioningArtifactParameter
    Information about a parameter used to provision a product.
    """
    
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_no_echo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsNoEcho') }})
    parameter_constraints: Optional[ParameterConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterConstraints') }})
    parameter_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterKey') }})
    parameter_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterType') }})
    
