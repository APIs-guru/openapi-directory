from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutRawMessageContentPathParams:
    message_id: str = field(default=None, metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRawMessageContentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutRawMessageContentRequestBodyContent:
    s3_reference: Optional[shared.S3Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Reference' }})
    

@dataclass_json
@dataclass
class PutRawMessageContentRequestBody:
    content: PutRawMessageContentRequestBodyContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class PutRawMessageContentRequest:
    path_params: PutRawMessageContentPathParams = field(default=None)
    headers: PutRawMessageContentHeaders = field(default=None)
    request: PutRawMessageContentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRawMessageContentResponse:
    content_type: str = field(default=None)
    invalid_content_location: Optional[Any] = field(default=None)
    message_frozen: Optional[Any] = field(default=None)
    message_rejected: Optional[Any] = field(default=None)
    put_raw_message_content_response: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
