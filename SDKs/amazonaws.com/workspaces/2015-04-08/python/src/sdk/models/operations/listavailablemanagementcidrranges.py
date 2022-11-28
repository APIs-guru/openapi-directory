from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListAvailableManagementCidrRangesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES = "WorkspacesService.ListAvailableManagementCidrRanges"


@dataclass
class ListAvailableManagementCidrRangesHeaders:
    x_amz_target: ListAvailableManagementCidrRangesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAvailableManagementCidrRangesRequest:
    headers: ListAvailableManagementCidrRangesHeaders = field()
    request: shared.ListAvailableManagementCidrRangesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAvailableManagementCidrRangesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    list_available_management_cidr_ranges_result: Optional[shared.ListAvailableManagementCidrRangesResult] = field(default=None)
    
