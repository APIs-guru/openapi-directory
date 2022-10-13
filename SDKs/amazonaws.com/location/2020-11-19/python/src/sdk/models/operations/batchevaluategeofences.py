from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BatchEvaluateGeofencesPathParams:
    collection_name: str = field(default=None, metadata={'path_param': { 'field_name': 'CollectionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchEvaluateGeofencesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class BatchEvaluateGeofencesRequestBody:
    device_position_updates: List[shared.DevicePositionUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevicePositionUpdates' }})
    

@dataclass
class BatchEvaluateGeofencesRequest:
    path_params: BatchEvaluateGeofencesPathParams = field(default=None)
    headers: BatchEvaluateGeofencesHeaders = field(default=None)
    request: BatchEvaluateGeofencesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchEvaluateGeofencesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    batch_evaluate_geofences_response: Optional[shared.BatchEvaluateGeofencesResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
