from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class RestoreRevisionUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rev', 'style': 'form', 'explode': True }})
    

@dataclass
class RestoreRevisionUsingGetRequest:
    query_params: RestoreRevisionUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class RestoreRevisionUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class RestoreRevisionUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    restore_revision_using_get_200_application_json_object: Optional[RestoreRevisionUsingGet200ApplicationJSON] = field(default=None)
    restore_revision_using_get_400_application_json_object: Optional[RestoreRevisionUsingGet400ApplicationJSON] = field(default=None)
    restore_revision_using_get_401_application_json_object: Optional[RestoreRevisionUsingGet401ApplicationJSON] = field(default=None)
    restore_revision_using_get_500_application_json_object: Optional[RestoreRevisionUsingGet500ApplicationJSON] = field(default=None)
    
