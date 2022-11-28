from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateTrainingJobXAmzTargetEnum(str, Enum):
    SAGE_MAKER_CREATE_TRAINING_JOB = "SageMaker.CreateTrainingJob"


@dataclass
class CreateTrainingJobHeaders:
    x_amz_target: CreateTrainingJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrainingJobRequest:
    headers: CreateTrainingJobHeaders = field()
    request: shared.CreateTrainingJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTrainingJobResponse:
    content_type: str = field()
    status_code: int = field()
    create_training_job_response: Optional[shared.CreateTrainingJobResponse] = field(default=None)
    resource_in_use: Optional[Any] = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
