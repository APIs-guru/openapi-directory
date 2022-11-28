from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodesOfConductGetConductCodePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodesOfConductGetConductCode415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodesOfConductGetConductCodeRequest:
    path_params: CodesOfConductGetConductCodePathParams = field()
    

@dataclass
class CodesOfConductGetConductCodeResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_of_conduct: Optional[shared.CodeOfConduct] = field(default=None)
    codes_of_conduct_get_conduct_code_415_application_json_object: Optional[CodesOfConductGetConductCode415ApplicationJSON] = field(default=None)
    
