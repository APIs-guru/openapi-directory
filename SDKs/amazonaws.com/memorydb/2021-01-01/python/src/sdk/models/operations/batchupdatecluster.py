from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class BatchUpdateClusterXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_BATCH_UPDATE_CLUSTER = "AmazonMemoryDB.BatchUpdateCluster"


@dataclass
class BatchUpdateClusterHeaders:
    x_amz_target: BatchUpdateClusterXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchUpdateClusterRequest:
    headers: BatchUpdateClusterHeaders = field()
    request: shared.BatchUpdateClusterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchUpdateClusterResponse:
    content_type: str = field()
    status_code: int = field()
    batch_update_cluster_response: Optional[shared.BatchUpdateClusterResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    service_update_not_found_fault: Optional[Any] = field(default=None)
    
