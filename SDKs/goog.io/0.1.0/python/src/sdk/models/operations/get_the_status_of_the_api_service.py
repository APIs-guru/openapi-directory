from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTheStatusOfTheAPIService200ApplicationJSON:
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetTheStatusOfTheAPIServiceResponse:
    content_type: str = field(default=None)
    get_the_status_of_the_api_service_200_application_json_object: Optional[GetTheStatusOfTheAPIService200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
