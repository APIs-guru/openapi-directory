from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPublicStatusUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPublicStatusUsingPostRequest:
    query_params: GetPublicStatusUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPublicStatusUsingPost200ApplicationJSONData:
    public_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicStatus' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetPublicStatusUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetPublicStatusUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_public_status_using_post_200_application_json_object: Optional[GetPublicStatusUsingPost200ApplicationJSON] = field(default=None)
    get_public_status_using_post_400_application_json_object: Optional[GetPublicStatusUsingPost400ApplicationJSON] = field(default=None)
    get_public_status_using_post_401_application_json_object: Optional[GetPublicStatusUsingPost401ApplicationJSON] = field(default=None)
    get_public_status_using_post_500_application_json_object: Optional[GetPublicStatusUsingPost500ApplicationJSON] = field(default=None)
    
