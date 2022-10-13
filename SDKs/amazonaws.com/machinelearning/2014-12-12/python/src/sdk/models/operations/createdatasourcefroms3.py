from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDataSourceFromS3XAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_DATA_SOURCE_FROM_S3 = "AmazonML_20141212.CreateDataSourceFromS3"


@dataclass
class CreateDataSourceFromS3Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateDataSourceFromS3XAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateDataSourceFromS3Request:
    headers: CreateDataSourceFromS3Headers = field(default=None)
    request: shared.CreateDataSourceFromS3Input = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataSourceFromS3Response:
    content_type: str = field(default=None)
    create_data_source_from_s3_output: Optional[shared.CreateDataSourceFromS3Output] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
