from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetRevisionChangesetUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rev', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRevisionChangesetUsingGetRequest:
    query_params: GetRevisionChangesetUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetRevisionChangesetUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_revision_changeset_using_get_200_application_json_object: Optional[GetRevisionChangesetUsingGet200ApplicationJSON] = field(default=None)
    get_revision_changeset_using_get_400_application_json_object: Optional[GetRevisionChangesetUsingGet400ApplicationJSON] = field(default=None)
    get_revision_changeset_using_get_401_application_json_object: Optional[GetRevisionChangesetUsingGet401ApplicationJSON] = field(default=None)
    get_revision_changeset_using_get_500_application_json_object: Optional[GetRevisionChangesetUsingGet500ApplicationJSON] = field(default=None)
    
