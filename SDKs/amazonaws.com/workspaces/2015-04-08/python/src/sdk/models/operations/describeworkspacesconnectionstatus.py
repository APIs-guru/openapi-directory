from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeWorkspacesConnectionStatusXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DESCRIBE_WORKSPACES_CONNECTION_STATUS = "WorkspacesService.DescribeWorkspacesConnectionStatus"


@dataclass
class DescribeWorkspacesConnectionStatusHeaders:
    x_amz_target: DescribeWorkspacesConnectionStatusXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeWorkspacesConnectionStatusRequest:
    headers: DescribeWorkspacesConnectionStatusHeaders = field()
    request: shared.DescribeWorkspacesConnectionStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeWorkspacesConnectionStatusResponse:
    content_type: str = field()
    status_code: int = field()
    describe_workspaces_connection_status_result: Optional[shared.DescribeWorkspacesConnectionStatusResult] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    
