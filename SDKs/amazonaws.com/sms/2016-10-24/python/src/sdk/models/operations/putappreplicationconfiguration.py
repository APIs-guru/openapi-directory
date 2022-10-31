from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutAppReplicationConfigurationXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_PUT_APP_REPLICATION_CONFIGURATION = "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration"


@dataclass
class PutAppReplicationConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutAppReplicationConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAppReplicationConfigurationRequest:
    headers: PutAppReplicationConfigurationHeaders = field(default=None)
    request: shared.PutAppReplicationConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAppReplicationConfigurationResponse:
    content_type: str = field(default=None)
    internal_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    missing_required_parameter_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    put_app_replication_configuration_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_operation_exception: Optional[Any] = field(default=None)
    
