from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apigatewayapiconfigfile


@dataclass_json
@dataclass
class ApigatewayAPIConfigOpenAPIDocument:
    document: Optional[apigatewayapiconfigfile.ApigatewayAPIConfigFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    
