from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetTheStatusOfTheAPIService200ApplicationJSON:
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetTheStatusOfTheAPIServiceResponse:
    content_type: str = field()
    status_code: int = field()
    get_the_status_of_the_api_service_200_application_json_object: Optional[GetTheStatusOfTheAPIService200ApplicationJSON] = field(default=None)
    
