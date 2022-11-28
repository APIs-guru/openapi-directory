from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateDiffHTMLUsingGetQueryParams:
    end_rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endRev', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    start_rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startRev', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateDiffHTMLUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CreateDiffHTMLUsingGetRequest:
    query_params: CreateDiffHTMLUsingGetQueryParams = field()
    

@dataclass
class CreateDiffHTMLUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    create_diff_html_using_get_200_application_json_object: Optional[CreateDiffHTMLUsingGet200ApplicationJSON] = field(default=None)
    create_diff_html_using_get_400_application_json_object: Optional[CreateDiffHTMLUsingGet400ApplicationJSON] = field(default=None)
    create_diff_html_using_get_401_application_json_object: Optional[CreateDiffHTMLUsingGet401ApplicationJSON] = field(default=None)
    create_diff_html_using_get_500_application_json_object: Optional[CreateDiffHTMLUsingGet500ApplicationJSON] = field(default=None)
    
