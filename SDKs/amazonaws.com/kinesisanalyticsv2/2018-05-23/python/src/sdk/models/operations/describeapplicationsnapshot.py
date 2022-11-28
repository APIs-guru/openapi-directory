from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeApplicationSnapshotXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_DESCRIBE_APPLICATION_SNAPSHOT = "KinesisAnalytics_20180523.DescribeApplicationSnapshot"


@dataclass
class DescribeApplicationSnapshotHeaders:
    x_amz_target: DescribeApplicationSnapshotXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeApplicationSnapshotRequest:
    headers: DescribeApplicationSnapshotHeaders = field()
    request: shared.DescribeApplicationSnapshotRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeApplicationSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    describe_application_snapshot_response: Optional[shared.DescribeApplicationSnapshotResponse] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
