from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BatchDeleteDevicePositionHistoryPathParams:
    tracker_name: str = field(default=None, metadata={'path_param': { 'field_name': 'TrackerName', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchDeleteDevicePositionHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class BatchDeleteDevicePositionHistoryRequestBody:
    device_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceIds' }})
    

@dataclass
class BatchDeleteDevicePositionHistoryRequest:
    path_params: BatchDeleteDevicePositionHistoryPathParams = field(default=None)
    headers: BatchDeleteDevicePositionHistoryHeaders = field(default=None)
    request: BatchDeleteDevicePositionHistoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchDeleteDevicePositionHistoryResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    batch_delete_device_position_history_response: Optional[shared.BatchDeleteDevicePositionHistoryResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
