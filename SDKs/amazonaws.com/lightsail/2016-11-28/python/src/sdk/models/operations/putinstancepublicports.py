from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutInstancePublicPortsXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_PUT_INSTANCE_PUBLIC_PORTS = "Lightsail_20161128.PutInstancePublicPorts"


@dataclass
class PutInstancePublicPortsHeaders:
    x_amz_target: PutInstancePublicPortsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutInstancePublicPortsRequest:
    headers: PutInstancePublicPortsHeaders = field()
    request: shared.PutInstancePublicPortsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutInstancePublicPortsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    account_setup_in_progress_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    put_instance_public_ports_result: Optional[shared.PutInstancePublicPortsResult] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
