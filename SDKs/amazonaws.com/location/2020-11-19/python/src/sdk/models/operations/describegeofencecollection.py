from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeGeofenceCollectionPathParams:
    collection_name: str = field(default=None, metadata={'path_param': { 'field_name': 'CollectionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeGeofenceCollectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeGeofenceCollectionRequest:
    path_params: DescribeGeofenceCollectionPathParams = field(default=None)
    headers: DescribeGeofenceCollectionHeaders = field(default=None)
    

@dataclass
class DescribeGeofenceCollectionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_geofence_collection_response: Optional[shared.DescribeGeofenceCollectionResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
