from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    entry_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_port' }})
    entry_protocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_protocol' }})
    target_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_port' }})
    target_protocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_protocol' }})
    tls_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_passthrough' }})
    
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck:
    check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_interval_seconds' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthy_threshold' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    response_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_timeout_seconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthy_threshold' }})
    

@dataclass_json
@dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion:
    available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    features: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sizes: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions:
    cookie_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    cookie_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_ttl_seconds' }})
    type: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer:
    algorithm: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    enable_backend_keepalive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_backend_keepalive' }})
    enable_proxy_protocol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_proxy_protocol' }})
    forwarding_rules: List[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarding_rules' }})
    health_check: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_http_to_https: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http_to_https' }})
    region: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sticky_sessions: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    
