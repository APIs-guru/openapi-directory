from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DetachInstancesFromLoadBalancerXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_DETACH_INSTANCES_FROM_LOAD_BALANCER = "Lightsail_20161128.DetachInstancesFromLoadBalancer"


@dataclass
class DetachInstancesFromLoadBalancerHeaders:
    x_amz_target: DetachInstancesFromLoadBalancerXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetachInstancesFromLoadBalancerRequest:
    headers: DetachInstancesFromLoadBalancerHeaders = field()
    request: shared.DetachInstancesFromLoadBalancerRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetachInstancesFromLoadBalancerResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    account_setup_in_progress_exception: Optional[Any] = field(default=None)
    detach_instances_from_load_balancer_result: Optional[shared.DetachInstancesFromLoadBalancerResult] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
