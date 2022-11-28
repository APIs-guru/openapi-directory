from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerNetworkTemplate:
    r"""ServerNetworkTemplate
    Network template.
    """
    
    applicable_instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableInstanceTypes') }})
    logical_interfaces: Optional[List[GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
