from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetInstancesHealthStatusQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetInstancesHealthStatusXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCES_HEALTH_STATUS = "Route53AutoNaming_v20170314.GetInstancesHealthStatus"


@dataclass
class GetInstancesHealthStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetInstancesHealthStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesHealthStatusRequest:
    query_params: GetInstancesHealthStatusQueryParams = field(default=None)
    headers: GetInstancesHealthStatusHeaders = field(default=None)
    request: shared.GetInstancesHealthStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetInstancesHealthStatusResponse:
    content_type: str = field(default=None)
    get_instances_health_status_response: Optional[shared.GetInstancesHealthStatusResponse] = field(default=None)
    instance_not_found: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    service_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
