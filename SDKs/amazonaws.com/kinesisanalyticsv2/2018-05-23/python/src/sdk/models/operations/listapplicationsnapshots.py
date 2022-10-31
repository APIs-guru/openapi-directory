from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListApplicationSnapshotsXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_LIST_APPLICATION_SNAPSHOTS = "KinesisAnalytics_20180523.ListApplicationSnapshots"


@dataclass
class ListApplicationSnapshotsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListApplicationSnapshotsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListApplicationSnapshotsRequest:
    headers: ListApplicationSnapshotsHeaders = field(default=None)
    request: shared.ListApplicationSnapshotsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListApplicationSnapshotsResponse:
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    list_application_snapshots_response: Optional[shared.ListApplicationSnapshotsResponse] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
