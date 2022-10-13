from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import loadbalancerattributename_enum


@dataclass_json
@dataclass
class UpdateLoadBalancerAttributeRequest:
    attribute_name: loadbalancerattributename_enum.LoadBalancerAttributeNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    attribute_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeValue' }})
    load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    
