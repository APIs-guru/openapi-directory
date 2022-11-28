from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetObjectPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'Path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectRequest:
    headers: GetObjectHeaders = field()
    path_params: GetObjectPathParams = field()
    

@dataclass
class GetObjectResponse:
    content_type: str = field()
    status_code: int = field()
    container_not_found_exception: Optional[Any] = field(default=None)
    get_object_response: Optional[shared.GetObjectResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    object_not_found_exception: Optional[Any] = field(default=None)
    requested_range_not_satisfiable_exception: Optional[Any] = field(default=None)
    
