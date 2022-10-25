from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByID:
    algorithm: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTag:
    algorithm: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    

@dataclass
class CreateLoadBalancerRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateLoadBalancer401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateLoadBalancerResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_load_balancer_202_application_json_any: Optional[Any] = field(default=None)
    create_load_balancer_401_application_json_object: Optional[CreateLoadBalancer401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
