from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ResolveCaseXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_RESOLVE_CASE = "AWSSupport_20130415.ResolveCase"


@dataclass
class ResolveCaseHeaders:
    x_amz_target: ResolveCaseXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResolveCaseRequest:
    headers: ResolveCaseHeaders = field()
    request: shared.ResolveCaseRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResolveCaseResponse:
    content_type: str = field()
    status_code: int = field()
    case_id_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    resolve_case_response: Optional[shared.ResolveCaseResponse] = field(default=None)
    
