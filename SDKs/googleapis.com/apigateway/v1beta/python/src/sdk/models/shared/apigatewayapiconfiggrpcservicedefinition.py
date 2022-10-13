from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewayapiconfigfile
from . import apigatewayapiconfigfile


@dataclass_json
@dataclass
class ApigatewayAPIConfigGrpcServiceDefinition:
    file_descriptor_set: Optional[apigatewayapiconfigfile.ApigatewayAPIConfigFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileDescriptorSet' }})
    source: Optional[List[apigatewayapiconfigfile.ApigatewayAPIConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
