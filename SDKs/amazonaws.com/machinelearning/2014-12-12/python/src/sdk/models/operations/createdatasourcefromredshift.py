from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDataSourceFromRedshiftXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_DATA_SOURCE_FROM_REDSHIFT = "AmazonML_20141212.CreateDataSourceFromRedshift"


@dataclass
class CreateDataSourceFromRedshiftHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateDataSourceFromRedshiftXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDataSourceFromRedshiftRequest:
    headers: CreateDataSourceFromRedshiftHeaders = field(default=None)
    request: shared.CreateDataSourceFromRedshiftInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataSourceFromRedshiftResponse:
    content_type: str = field(default=None)
    create_data_source_from_redshift_output: Optional[shared.CreateDataSourceFromRedshiftOutput] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
