from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserActionsJSONQueryParams:
    filter: str = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    offset: int = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    username: str = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserActionsJSONRequest:
    query_params: GetUserActionsJSONQueryParams = field(default=None)
    

@dataclass
class GetUserActionsJSONResponse:
    content_type: str = field(default=None)
    get_user_actions_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
