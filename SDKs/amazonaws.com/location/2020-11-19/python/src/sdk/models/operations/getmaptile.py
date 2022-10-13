from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetMapTilePathParams:
    map_name: str = field(default=None, metadata={'path_param': { 'field_name': 'MapName', 'style': 'simple', 'explode': False }})
    x: str = field(default=None, metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: str = field(default=None, metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    z: str = field(default=None, metadata={'path_param': { 'field_name': 'Z', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapTileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetMapTileRequest:
    path_params: GetMapTilePathParams = field(default=None)
    headers: GetMapTileHeaders = field(default=None)
    

@dataclass
class GetMapTileResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_map_tile_response: Optional[shared.GetMapTileResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
