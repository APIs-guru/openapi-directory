from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetRelationalDatabaseParametersXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_GET_RELATIONAL_DATABASE_PARAMETERS = "Lightsail_20161128.GetRelationalDatabaseParameters"


@dataclass
class GetRelationalDatabaseParametersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetRelationalDatabaseParametersXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetRelationalDatabaseParametersRequest:
    headers: GetRelationalDatabaseParametersHeaders = field(default=None)
    request: shared.GetRelationalDatabaseParametersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRelationalDatabaseParametersResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    account_setup_in_progress_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_relational_database_parameters_result: Optional[shared.GetRelationalDatabaseParametersResult] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
