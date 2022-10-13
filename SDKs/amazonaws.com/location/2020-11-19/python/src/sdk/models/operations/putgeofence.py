from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutGeofencePathParams:
    collection_name: str = field(default=None, metadata={'path_param': { 'field_name': 'CollectionName', 'style': 'simple', 'explode': False }})
    geofence_id: str = field(default=None, metadata={'path_param': { 'field_name': 'GeofenceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGeofenceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutGeofenceRequestBodyGeometry:
    polygon: Optional[List[List[List[float]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Polygon' }})
    

@dataclass_json
@dataclass
class PutGeofenceRequestBody:
    geometry: PutGeofenceRequestBodyGeometry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    

@dataclass
class PutGeofenceRequest:
    path_params: PutGeofencePathParams = field(default=None)
    headers: PutGeofenceHeaders = field(default=None)
    request: PutGeofenceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGeofenceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_geofence_response: Optional[shared.PutGeofenceResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
