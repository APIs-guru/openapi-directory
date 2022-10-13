from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPadIDUsingPostQueryParams:
    ro_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'roID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPadIDUsingPostRequest:
    query_params: GetPadIDUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPadIDUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPadIDUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPadIDUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPadIDUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetPadIDUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_pad_id_using_post_200_application_json_object: Optional[GetPadIDUsingPost200ApplicationJSON] = field(default=None)
    get_pad_id_using_post_400_application_json_object: Optional[GetPadIDUsingPost400ApplicationJSON] = field(default=None)
    get_pad_id_using_post_401_application_json_object: Optional[GetPadIDUsingPost401ApplicationJSON] = field(default=None)
    get_pad_id_using_post_500_application_json_object: Optional[GetPadIDUsingPost500ApplicationJSON] = field(default=None)
    
