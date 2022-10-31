from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PublishMetricsPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishMetricsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PublishMetricsRequestBody:
    metric_data: List[shared.MetricDatum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricData' }})
    

@dataclass
class PublishMetricsRequest:
    path_params: PublishMetricsPathParams = field(default=None)
    headers: PublishMetricsHeaders = field(default=None)
    request: PublishMetricsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishMetricsResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    publish_metrics_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
