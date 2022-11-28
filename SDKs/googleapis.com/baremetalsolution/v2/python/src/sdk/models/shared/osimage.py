from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsImage:
    r"""OsImage
    Operation System image.
    """
    
    applicable_instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableInstanceTypes') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    supported_network_templates: Optional[List[ServerNetworkTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedNetworkTemplates') }})
    
