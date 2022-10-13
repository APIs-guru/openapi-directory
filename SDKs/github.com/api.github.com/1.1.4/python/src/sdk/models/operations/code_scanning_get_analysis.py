from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CodeScanningGetAnalysisPathParams:
    analysis_id: int = field(default=None, metadata={'path_param': { 'field_name': 'analysis_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodeScanningGetAnalysisRequest:
    path_params: CodeScanningGetAnalysisPathParams = field(default=None)
    

@dataclass_json
@dataclass
class CodeScanningGetAnalysis503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CodeScanningGetAnalysisResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_analysis: Optional[shared.CodeScanningAnalysis] = field(default=None)
    code_scanning_get_analysis_503_application_json_object: Optional[CodeScanningGetAnalysis503ApplicationJSON] = field(default=None)
    
