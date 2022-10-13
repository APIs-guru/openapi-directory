from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateAuthorIfNotExistsForUsingPostQueryParams:
    author_mapper: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorMapper', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAuthorIfNotExistsForUsingPostRequest:
    query_params: CreateAuthorIfNotExistsForUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorID' }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateAuthorIfNotExistsForUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_author_if_not_exists_for_using_post_200_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost200ApplicationJSON] = field(default=None)
    create_author_if_not_exists_for_using_post_400_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost400ApplicationJSON] = field(default=None)
    create_author_if_not_exists_for_using_post_401_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost401ApplicationJSON] = field(default=None)
    create_author_if_not_exists_for_using_post_500_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost500ApplicationJSON] = field(default=None)
    
