from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetMediaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetMediaRequestBodyStartSelector:
    after_fragment_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AfterFragmentNumber' }})
    continuation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuationToken' }})
    start_selector_type: Optional[shared.StartSelectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartSelectorType' }})
    start_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class GetMediaRequestBody:
    start_selector: GetMediaRequestBodyStartSelector = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartSelector' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    

@dataclass
class GetMediaRequest:
    headers: GetMediaHeaders = field(default=None)
    request: GetMediaRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetMediaResponse:
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    connection_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_media_output: Optional[shared.GetMediaOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_endpoint_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
