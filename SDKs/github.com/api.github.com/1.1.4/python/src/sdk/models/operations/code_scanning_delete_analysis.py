from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningDeleteAnalysisPathParams:
    analysis_id: int = field(metadata={'path_param': { 'field_name': 'analysis_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodeScanningDeleteAnalysisQueryParams:
    confirm_delete: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'confirm_delete', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CodeScanningDeleteAnalysis503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningDeleteAnalysisRequest:
    path_params: CodeScanningDeleteAnalysisPathParams = field()
    query_params: CodeScanningDeleteAnalysisQueryParams = field()
    

@dataclass
class CodeScanningDeleteAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_analysis_deletion: Optional[shared.CodeScanningAnalysisDeletion] = field(default=None)
    code_scanning_delete_analysis_503_application_json_object: Optional[CodeScanningDeleteAnalysis503ApplicationJSON] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    
