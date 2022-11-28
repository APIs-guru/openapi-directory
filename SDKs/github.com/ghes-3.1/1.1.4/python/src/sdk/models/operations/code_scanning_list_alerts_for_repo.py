from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningListAlertsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodeScanningListAlertsForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    state: Optional[shared.CodeScanningAlertStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    tool_guid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tool_guid', 'style': 'form', 'explode': True }})
    tool_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tool_name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CodeScanningListAlertsForRepo503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningListAlertsForRepoRequest:
    path_params: CodeScanningListAlertsForRepoPathParams = field()
    query_params: CodeScanningListAlertsForRepoQueryParams = field()
    

@dataclass
class CodeScanningListAlertsForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_alert_items: Optional[List[shared.CodeScanningAlertItems]] = field(default=None)
    code_scanning_list_alerts_for_repo_503_application_json_object: Optional[CodeScanningListAlertsForRepo503ApplicationJSON] = field(default=None)
    
