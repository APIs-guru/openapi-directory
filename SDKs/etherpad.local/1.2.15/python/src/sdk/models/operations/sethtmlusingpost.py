from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetHTMLUsingPostQueryParams:
    html: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'html', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class SetHTMLUsingPostRequest:
    query_params: SetHTMLUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SetHTMLUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetHTMLUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetHTMLUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetHTMLUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SetHTMLUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_html_using_post_200_application_json_object: Optional[SetHTMLUsingPost200ApplicationJSON] = field(default=None)
    set_html_using_post_400_application_json_object: Optional[SetHTMLUsingPost400ApplicationJSON] = field(default=None)
    set_html_using_post_401_application_json_object: Optional[SetHTMLUsingPost401ApplicationJSON] = field(default=None)
    set_html_using_post_500_application_json_object: Optional[SetHTMLUsingPost500ApplicationJSON] = field(default=None)
    
