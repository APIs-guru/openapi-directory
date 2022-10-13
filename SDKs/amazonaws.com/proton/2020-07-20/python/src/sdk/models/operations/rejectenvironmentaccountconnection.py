from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RejectEnvironmentAccountConnectionXAmzTargetEnum(str, Enum):
    AWS_PROTON20200720_REJECT_ENVIRONMENT_ACCOUNT_CONNECTION = "AwsProton20200720.RejectEnvironmentAccountConnection"


@dataclass
class RejectEnvironmentAccountConnectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RejectEnvironmentAccountConnectionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RejectEnvironmentAccountConnectionRequest:
    headers: RejectEnvironmentAccountConnectionHeaders = field(default=None)
    request: shared.RejectEnvironmentAccountConnectionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RejectEnvironmentAccountConnectionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    reject_environment_account_connection_output: Optional[shared.RejectEnvironmentAccountConnectionOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
