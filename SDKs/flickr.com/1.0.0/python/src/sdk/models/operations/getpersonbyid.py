from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPersonByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPersonByIDRequest:
    query_params: GetPersonByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPersonByID200ApplicationJSON:
    person: Optional[shared.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass
class GetPersonByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_person_by_id_200_application_json_object: Optional[GetPersonByID200ApplicationJSON] = field(default=None)
    
