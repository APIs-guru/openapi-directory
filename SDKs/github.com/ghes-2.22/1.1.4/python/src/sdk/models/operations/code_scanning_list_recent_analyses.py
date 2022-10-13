from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CodeScanningListRecentAnalysesPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodeScanningListRecentAnalysesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    sarif_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sarif_id', 'style': 'form', 'explode': True }})
    tool_guid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tool_guid', 'style': 'form', 'explode': True }})
    tool_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tool_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CodeScanningListRecentAnalysesRequest:
    path_params: CodeScanningListRecentAnalysesPathParams = field(default=None)
    query_params: CodeScanningListRecentAnalysesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CodeScanningListRecentAnalyses503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CodeScanningListRecentAnalysesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_analyses: Optional[List[shared.CodeScanningAnalysis]] = field(default=None)
    code_scanning_list_recent_analyses_503_application_json_object: Optional[CodeScanningListRecentAnalyses503ApplicationJSON] = field(default=None)
    
