from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartOnDemandReplicationRunXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_START_ON_DEMAND_REPLICATION_RUN = "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun"


@dataclass
class StartOnDemandReplicationRunHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartOnDemandReplicationRunXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartOnDemandReplicationRunRequest:
    headers: StartOnDemandReplicationRunHeaders = field(default=None)
    request: shared.StartOnDemandReplicationRunRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartOnDemandReplicationRunResponse:
    content_type: str = field(default=None)
    dry_run_operation_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    missing_required_parameter_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    replication_run_limit_exceeded_exception: Optional[Any] = field(default=None)
    start_on_demand_replication_run_response: Optional[shared.StartOnDemandReplicationRunResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_operation_exception: Optional[Any] = field(default=None)
    
