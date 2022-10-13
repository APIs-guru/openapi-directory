from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateReplicationJobXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_UPDATE_REPLICATION_JOB = "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob"


@dataclass
class UpdateReplicationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateReplicationJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateReplicationJobRequest:
    headers: UpdateReplicationJobHeaders = field(default=None)
    request: shared.UpdateReplicationJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateReplicationJobResponse:
    content_type: str = field(default=None)
    internal_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    missing_required_parameter_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    replication_job_not_found_exception: Optional[Any] = field(default=None)
    server_cannot_be_replicated_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    temporarily_unavailable_exception: Optional[Any] = field(default=None)
    unauthorized_operation_exception: Optional[Any] = field(default=None)
    update_replication_job_response: Optional[dict[str, Any]] = field(default=None)
    
