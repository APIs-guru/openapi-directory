from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CodesOfConductGetAllCodesOfConduct415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodesOfConductGetAllCodesOfConductResponse:
    content_type: str = field()
    status_code: int = field()
    code_of_conducts: Optional[List[shared.CodeOfConduct]] = field(default=None)
    codes_of_conduct_get_all_codes_of_conduct_415_application_json_object: Optional[CodesOfConductGetAllCodesOfConduct415ApplicationJSON] = field(default=None)
    
