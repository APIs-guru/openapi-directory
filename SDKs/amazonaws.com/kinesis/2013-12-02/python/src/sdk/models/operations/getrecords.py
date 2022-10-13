from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetRecordsXAmzTargetEnum(str, Enum):
    KINESIS_20131202_GET_RECORDS = "Kinesis_20131202.GetRecords"


@dataclass
class GetRecordsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetRecordsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetRecordsRequest:
    headers: GetRecordsHeaders = field(default=None)
    request: shared.GetRecordsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRecordsResponse:
    content_type: str = field(default=None)
    expired_iterator_exception: Optional[Any] = field(default=None)
    get_records_output: Optional[shared.GetRecordsOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    kms_access_denied_exception: Optional[Any] = field(default=None)
    kms_disabled_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    kms_not_found_exception: Optional[Any] = field(default=None)
    kms_opt_in_required: Optional[Any] = field(default=None)
    kms_throttling_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
