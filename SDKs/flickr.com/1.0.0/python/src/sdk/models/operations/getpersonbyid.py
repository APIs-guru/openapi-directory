from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPersonByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPersonByID200ApplicationJSON:
    person: Optional[shared.Person] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass
class GetPersonByIDRequest:
    query_params: GetPersonByIDQueryParams = field()
    

@dataclass
class GetPersonByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_person_by_id_200_application_json_object: Optional[GetPersonByID200ApplicationJSON] = field(default=None)
    
