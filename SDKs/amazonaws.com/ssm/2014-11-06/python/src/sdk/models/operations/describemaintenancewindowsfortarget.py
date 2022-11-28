from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeMaintenanceWindowsForTargetQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeMaintenanceWindowsForTargetXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOWS_FOR_TARGET = "AmazonSSM.DescribeMaintenanceWindowsForTarget"


@dataclass
class DescribeMaintenanceWindowsForTargetHeaders:
    x_amz_target: DescribeMaintenanceWindowsForTargetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeMaintenanceWindowsForTargetRequest:
    headers: DescribeMaintenanceWindowsForTargetHeaders = field()
    query_params: DescribeMaintenanceWindowsForTargetQueryParams = field()
    request: shared.DescribeMaintenanceWindowsForTargetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeMaintenanceWindowsForTargetResponse:
    content_type: str = field()
    status_code: int = field()
    describe_maintenance_windows_for_target_result: Optional[shared.DescribeMaintenanceWindowsForTargetResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    
