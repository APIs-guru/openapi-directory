from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetHTMLUsingGetQueryParams:
    html: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'html', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class SetHTMLUsingGetRequest:
    query_params: SetHTMLUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SetHTMLUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetHTMLUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetHTMLUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetHTMLUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SetHTMLUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_html_using_get_200_application_json_object: Optional[SetHTMLUsingGet200ApplicationJSON] = field(default=None)
    set_html_using_get_400_application_json_object: Optional[SetHTMLUsingGet400ApplicationJSON] = field(default=None)
    set_html_using_get_401_application_json_object: Optional[SetHTMLUsingGet401ApplicationJSON] = field(default=None)
    set_html_using_get_500_application_json_object: Optional[SetHTMLUsingGet500ApplicationJSON] = field(default=None)
    
