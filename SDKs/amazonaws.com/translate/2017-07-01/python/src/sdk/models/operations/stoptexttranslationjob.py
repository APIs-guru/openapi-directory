from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StopTextTranslationJobXAmzTargetEnum(str, Enum):
    AWS_SHINE_FRONTEND_SERVICE_20170701_STOP_TEXT_TRANSLATION_JOB = "AWSShineFrontendService_20170701.StopTextTranslationJob"


@dataclass
class StopTextTranslationJobHeaders:
    x_amz_target: StopTextTranslationJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTextTranslationJobRequest:
    headers: StopTextTranslationJobHeaders = field()
    request: shared.StopTextTranslationJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopTextTranslationJobResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    stop_text_translation_job_response: Optional[shared.StopTextTranslationJobResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
