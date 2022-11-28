from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutGeofencePathParams:
    collection_name: str = field(metadata={'path_param': { 'field_name': 'CollectionName', 'style': 'simple', 'explode': False }})
    geofence_id: str = field(metadata={'path_param': { 'field_name': 'GeofenceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGeofenceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutGeofenceRequestBodyGeometry:
    r"""PutGeofenceRequestBodyGeometry
    <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
    """
    
    polygon: Optional[List[List[List[float]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Polygon') }})
    

@dataclass_json
@dataclass
class PutGeofenceRequestBody:
    geometry: PutGeofenceRequestBodyGeometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    

@dataclass
class PutGeofenceRequest:
    headers: PutGeofenceHeaders = field()
    path_params: PutGeofencePathParams = field()
    request: PutGeofenceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGeofenceResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_geofence_response: Optional[shared.PutGeofenceResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
