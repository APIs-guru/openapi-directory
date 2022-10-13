from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CopyPadWithoutHistoryUsingGetQueryParams:
    destination_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destinationID', 'style': 'form', 'explode': True }})
    force: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceID', 'style': 'form', 'explode': True }})
    

@dataclass
class CopyPadWithoutHistoryUsingGetRequest:
    query_params: CopyPadWithoutHistoryUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CopyPadWithoutHistoryUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    copy_pad_without_history_using_get_200_application_json_object: Optional[CopyPadWithoutHistoryUsingGet200ApplicationJSON] = field(default=None)
    copy_pad_without_history_using_get_400_application_json_object: Optional[CopyPadWithoutHistoryUsingGet400ApplicationJSON] = field(default=None)
    copy_pad_without_history_using_get_401_application_json_object: Optional[CopyPadWithoutHistoryUsingGet401ApplicationJSON] = field(default=None)
    copy_pad_without_history_using_get_500_application_json_object: Optional[CopyPadWithoutHistoryUsingGet500ApplicationJSON] = field(default=None)
    
