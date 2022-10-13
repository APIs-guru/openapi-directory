from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateDiffHTMLUsingPostQueryParams:
    end_rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endRev', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    start_rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startRev', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateDiffHTMLUsingPostRequest:
    query_params: CreateDiffHTMLUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateDiffHTMLUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_diff_html_using_post_200_application_json_object: Optional[CreateDiffHTMLUsingPost200ApplicationJSON] = field(default=None)
    create_diff_html_using_post_400_application_json_object: Optional[CreateDiffHTMLUsingPost400ApplicationJSON] = field(default=None)
    create_diff_html_using_post_401_application_json_object: Optional[CreateDiffHTMLUsingPost401ApplicationJSON] = field(default=None)
    create_diff_html_using_post_500_application_json_object: Optional[CreateDiffHTMLUsingPost500ApplicationJSON] = field(default=None)
    
