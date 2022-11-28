from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningGetAnalysisPathParams:
    analysis_id: int = field(metadata={'path_param': { 'field_name': 'analysis_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodeScanningGetAnalysis503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningGetAnalysisRequest:
    path_params: CodeScanningGetAnalysisPathParams = field()
    

@dataclass
class CodeScanningGetAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_analysis: Optional[shared.CodeScanningAnalysis] = field(default=None)
    code_scanning_get_analysis_200_application_json_plus_sarif_string: Optional[str] = field(default=None)
    code_scanning_get_analysis_503_application_json_object: Optional[CodeScanningGetAnalysis503ApplicationJSON] = field(default=None)
    
