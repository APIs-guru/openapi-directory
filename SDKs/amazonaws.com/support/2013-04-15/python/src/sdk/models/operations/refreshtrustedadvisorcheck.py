from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RefreshTrustedAdvisorCheckXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_REFRESH_TRUSTED_ADVISOR_CHECK = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"


@dataclass
class RefreshTrustedAdvisorCheckHeaders:
    x_amz_target: RefreshTrustedAdvisorCheckXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefreshTrustedAdvisorCheckRequest:
    headers: RefreshTrustedAdvisorCheckHeaders = field()
    request: shared.RefreshTrustedAdvisorCheckRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RefreshTrustedAdvisorCheckResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    refresh_trusted_advisor_check_response: Optional[shared.RefreshTrustedAdvisorCheckResponse] = field(default=None)
    
