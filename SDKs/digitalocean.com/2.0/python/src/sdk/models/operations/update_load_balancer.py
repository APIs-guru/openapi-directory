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
    
class UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByID:
    algorithm: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTag:
    algorithm: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
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
    
