from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetHTMLUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rev', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetHTMLUsingGet200ApplicationJSONData:
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    

@dataclass_json
@dataclass
class GetHTMLUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetHTMLUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetHTMLUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetHTMLUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetHTMLUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetHTMLUsingGetRequest:
    query_params: GetHTMLUsingGetQueryParams = field()
    

@dataclass
class GetHTMLUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    get_html_using_get_200_application_json_object: Optional[GetHTMLUsingGet200ApplicationJSON] = field(default=None)
    get_html_using_get_400_application_json_object: Optional[GetHTMLUsingGet400ApplicationJSON] = field(default=None)
    get_html_using_get_401_application_json_object: Optional[GetHTMLUsingGet401ApplicationJSON] = field(default=None)
    get_html_using_get_500_application_json_object: Optional[GetHTMLUsingGet500ApplicationJSON] = field(default=None)
    
