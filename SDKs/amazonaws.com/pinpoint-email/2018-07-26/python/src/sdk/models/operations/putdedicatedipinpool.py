from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutDedicatedIPInPoolPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDedicatedIPInPoolHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutDedicatedIPInPoolRequestBody:
    destination_pool_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPoolName') }})
    

@dataclass
class PutDedicatedIPInPoolRequest:
    headers: PutDedicatedIPInPoolHeaders = field()
    path_params: PutDedicatedIPInPoolPathParams = field()
    request: PutDedicatedIPInPoolRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDedicatedIPInPoolResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    put_dedicated_ip_in_pool_response: Optional[dict[str, Any]] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
