from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CopyPadUsingPostQueryParams:
    destination_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destinationID', 'style': 'form', 'explode': True }})
    force: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceID', 'style': 'form', 'explode': True }})
    

@dataclass
class CopyPadUsingPostRequest:
    query_params: CopyPadUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CopyPadUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CopyPadUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CopyPadUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CopyPadUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CopyPadUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    copy_pad_using_post_200_application_json_object: Optional[CopyPadUsingPost200ApplicationJSON] = field(default=None)
    copy_pad_using_post_400_application_json_object: Optional[CopyPadUsingPost400ApplicationJSON] = field(default=None)
    copy_pad_using_post_401_application_json_object: Optional[CopyPadUsingPost401ApplicationJSON] = field(default=None)
    copy_pad_using_post_500_application_json_object: Optional[CopyPadUsingPost500ApplicationJSON] = field(default=None)
    
