from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetGroupByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    group_path_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_path_alias', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupByIDRequest:
    query_params: GetGroupByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetGroupByID200ApplicationJSON:
    group: Optional[shared.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass
class GetGroupByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_group_by_id_200_application_json_object: Optional[GetGroupByID200ApplicationJSON] = field(default=None)
    
