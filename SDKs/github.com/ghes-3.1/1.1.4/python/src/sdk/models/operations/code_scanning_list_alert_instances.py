from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CodeScanningListAlertInstancesPathParams:
    alert_number: int = field(default=None, metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodeScanningListAlertInstancesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclass
class CodeScanningListAlertInstancesRequest:
    path_params: CodeScanningListAlertInstancesPathParams = field(default=None)
    query_params: CodeScanningListAlertInstancesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CodeScanningListAlertInstances503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CodeScanningListAlertInstancesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_alert_instances: Optional[List[shared.CodeScanningAlertInstance]] = field(default=None)
    code_scanning_list_alert_instances_503_application_json_object: Optional[CodeScanningListAlertInstances503ApplicationJSON] = field(default=None)
    
