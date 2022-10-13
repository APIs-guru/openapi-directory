from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetHTMLUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rev', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHTMLUsingPostRequest:
    query_params: GetHTMLUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetHTMLUsingPost200ApplicationJSONData:
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    

@dataclass_json
@dataclass
class GetHTMLUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetHTMLUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetHTMLUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetHTMLUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetHTMLUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetHTMLUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_html_using_post_200_application_json_object: Optional[GetHTMLUsingPost200ApplicationJSON] = field(default=None)
    get_html_using_post_400_application_json_object: Optional[GetHTMLUsingPost400ApplicationJSON] = field(default=None)
    get_html_using_post_401_application_json_object: Optional[GetHTMLUsingPost401ApplicationJSON] = field(default=None)
    get_html_using_post_500_application_json_object: Optional[GetHTMLUsingPost500ApplicationJSON] = field(default=None)
    
