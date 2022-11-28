from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetRequestedServiceQuotaChangeXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_GET_REQUESTED_SERVICE_QUOTA_CHANGE = "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"


@dataclass
class GetRequestedServiceQuotaChangeHeaders:
    x_amz_target: GetRequestedServiceQuotaChangeXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequestedServiceQuotaChangeRequest:
    headers: GetRequestedServiceQuotaChangeHeaders = field()
    request: shared.GetRequestedServiceQuotaChangeRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRequestedServiceQuotaChangeResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_requested_service_quota_change_response: Optional[shared.GetRequestedServiceQuotaChangeResponse] = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
