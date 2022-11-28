from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApigatewayAPIConfigGrpcServiceDefinition:
    r"""ApigatewayAPIConfigGrpcServiceDefinition
    A gRPC service definition.
    """
    
    file_descriptor_set: Optional[ApigatewayAPIConfigFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDescriptorSet') }})
    source: Optional[List[ApigatewayAPIConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
