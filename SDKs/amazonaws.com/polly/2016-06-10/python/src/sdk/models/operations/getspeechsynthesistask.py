from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSpeechSynthesisTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpeechSynthesisTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpeechSynthesisTaskRequest:
    path_params: GetSpeechSynthesisTaskPathParams = field(default=None)
    headers: GetSpeechSynthesisTaskHeaders = field(default=None)
    

@dataclass
class GetSpeechSynthesisTaskResponse:
    content_type: str = field(default=None)
    get_speech_synthesis_task_output: Optional[shared.GetSpeechSynthesisTaskOutput] = field(default=None)
    invalid_task_id_exception: Optional[Any] = field(default=None)
    service_failure_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    synthesis_task_not_found_exception: Optional[Any] = field(default=None)
    
