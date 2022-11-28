from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningListAlertInstancesPathParams:
    alert_number: int = field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodeScanningListAlertInstancesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CodeScanningListAlertInstances503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningListAlertInstancesRequest:
    path_params: CodeScanningListAlertInstancesPathParams = field()
    query_params: CodeScanningListAlertInstancesQueryParams = field()
    

@dataclass
class CodeScanningListAlertInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_alert_instances: Optional[List[shared.CodeScanningAlertInstance]] = field(default=None)
    code_scanning_list_alert_instances_503_application_json_object: Optional[CodeScanningListAlertInstances503ApplicationJSON] = field(default=None)
    
