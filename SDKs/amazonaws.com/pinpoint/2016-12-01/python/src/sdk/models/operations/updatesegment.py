from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSegmentPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    segment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'segment-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSegmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSegmentRequestBodyWriteSegmentRequest:
    dimensions: Optional[shared.SegmentDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    segment_groups: Optional[shared.SegmentGroupList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentGroups' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class UpdateSegmentRequestBody:
    write_segment_request: UpdateSegmentRequestBodyWriteSegmentRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteSegmentRequest' }})
    

@dataclass
class UpdateSegmentRequest:
    path_params: UpdateSegmentPathParams = field(default=None)
    headers: UpdateSegmentHeaders = field(default=None)
    request: UpdateSegmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSegmentResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_segment_response: Optional[shared.UpdateSegmentResponse] = field(default=None)
    
