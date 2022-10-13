from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLoadBalancerPathParams:
    lb_id: str = field(default=None, metadata={'path_param': { 'field_name': 'lb_id', 'style': 'simple', 'explode': False }})
    
class UpdateLoadBalancerRequestBody1AlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody1ForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody1HealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    
class UpdateLoadBalancerRequestBody1SizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class UpdateLoadBalancerRequestBody1StatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class UpdateLoadBalancerRequestBody1StickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody1StickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[UpdateLoadBalancerRequestBody1StickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody1:
    algorithm: Optional[UpdateLoadBalancerRequestBody1AlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[UpdateLoadBalancerRequestBody1ForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[UpdateLoadBalancerRequestBody1HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[UpdateLoadBalancerRequestBody1SizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[UpdateLoadBalancerRequestBody1StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[UpdateLoadBalancerRequestBody1StickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    
class UpdateLoadBalancerRequestBody2AlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody2ForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody2HealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    
class UpdateLoadBalancerRequestBody2SizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class UpdateLoadBalancerRequestBody2StatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class UpdateLoadBalancerRequestBody2StickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody2StickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[UpdateLoadBalancerRequestBody2StickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBody2:
    algorithm: Optional[UpdateLoadBalancerRequestBody2AlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[UpdateLoadBalancerRequestBody2ForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[UpdateLoadBalancerRequestBody2HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[UpdateLoadBalancerRequestBody2SizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[UpdateLoadBalancerRequestBody2StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[UpdateLoadBalancerRequestBody2StickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    

@dataclass
class UpdateLoadBalancerRequest:
    path_params: UpdateLoadBalancerPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateLoadBalancer401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateLoadBalancerResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_load_balancer_200_application_json_any: Optional[Any] = field(default=None)
    update_load_balancer_401_application_json_object: Optional[UpdateLoadBalancer401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
