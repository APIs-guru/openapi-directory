from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateCaseXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_CREATE_CASE = "AWSSupport_20130415.CreateCase"


@dataclass
class CreateCaseHeaders:
    x_amz_target: CreateCaseXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCaseRequest:
    headers: CreateCaseHeaders = field()
    request: shared.CreateCaseRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCaseResponse:
    content_type: str = field()
    status_code: int = field()
    attachment_set_expired: Optional[Any] = field(default=None)
    attachment_set_id_not_found: Optional[Any] = field(default=None)
    case_creation_limit_exceeded: Optional[Any] = field(default=None)
    create_case_response: Optional[shared.CreateCaseResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    
