from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class FailoverShardXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_FAILOVER_SHARD = "AmazonMemoryDB.FailoverShard"


@dataclass
class FailoverShardHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: FailoverShardXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class FailoverShardRequest:
    headers: FailoverShardHeaders = field(default=None)
    request: shared.FailoverShardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FailoverShardResponse:
    api_call_rate_for_customer_exceeded_fault: Optional[Any] = field(default=None)
    cluster_not_found_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    failover_shard_response: Optional[shared.FailoverShardResponse] = field(default=None)
    invalid_cluster_state_fault: Optional[Any] = field(default=None)
    invalid_kms_key_fault: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    shard_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    test_failover_not_available_fault: Optional[Any] = field(default=None)
    
