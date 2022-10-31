from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetRecordsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_STREAMS_20120810_GET_RECORDS = "DynamoDBStreams_20120810.GetRecords"


@dataclass
class GetRecordsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetRecordsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordsRequest:
    headers: GetRecordsHeaders = field(default=None)
    request: shared.GetRecordsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRecordsResponse:
    content_type: str = field(default=None)
    expired_iterator_exception: Optional[Any] = field(default=None)
    get_records_output: Optional[shared.GetRecordsOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    trimmed_data_access_exception: Optional[Any] = field(default=None)
    
