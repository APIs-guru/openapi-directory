from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDataSourceFromRdsxAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_DATA_SOURCE_FROM_RDS = "AmazonML_20141212.CreateDataSourceFromRDS"


@dataclass
class CreateDataSourceFromRdsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateDataSourceFromRdsxAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateDataSourceFromRdsRequest:
    headers: CreateDataSourceFromRdsHeaders = field(default=None)
    request: shared.CreateDataSourceFromRdsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataSourceFromRdsResponse:
    content_type: str = field(default=None)
    create_data_source_from_rds_output: Optional[shared.CreateDataSourceFromRdsOutput] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
