from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CodesOfConductGetConductCodePathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodesOfConductGetConductCodeRequest:
    path_params: CodesOfConductGetConductCodePathParams = field(default=None)
    

@dataclass_json
@dataclass
class CodesOfConductGetConductCode415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CodesOfConductGetConductCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_of_conduct: Optional[shared.CodeOfConduct] = field(default=None)
    codes_of_conduct_get_conduct_code_415_application_json_object: Optional[CodesOfConductGetConductCode415ApplicationJSON] = field(default=None)
    
