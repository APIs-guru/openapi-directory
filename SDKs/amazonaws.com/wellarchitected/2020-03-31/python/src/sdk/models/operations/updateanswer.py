from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAnswerPathParams:
    lens_alias: str = field(default=None, metadata={'path_param': { 'field_name': 'LensAlias', 'style': 'simple', 'explode': False }})
    question_id: str = field(default=None, metadata={'path_param': { 'field_name': 'QuestionId', 'style': 'simple', 'explode': False }})
    workload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAnswerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateAnswerRequestBodyReasonEnum(str, Enum):
    OUT_OF_SCOPE = "OUT_OF_SCOPE"
    BUSINESS_PRIORITIES = "BUSINESS_PRIORITIES"
    ARCHITECTURE_CONSTRAINTS = "ARCHITECTURE_CONSTRAINTS"
    OTHER = "OTHER"
    NONE = "NONE"


@dataclass_json
@dataclass
class UpdateAnswerRequestBody:
    choice_updates: Optional[dict[str, shared.ChoiceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChoiceUpdates' }})
    is_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsApplicable' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    reason: Optional[UpdateAnswerRequestBodyReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    selected_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectedChoices' }})
    

@dataclass
class UpdateAnswerRequest:
    path_params: UpdateAnswerPathParams = field(default=None)
    headers: UpdateAnswerHeaders = field(default=None)
    request: UpdateAnswerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAnswerResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_answer_output: Optional[shared.UpdateAnswerOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
