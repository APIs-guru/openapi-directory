from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Origin:
    r"""Origin
    <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol_policy: Optional[OriginProtocolPolicyEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolPolicy') }})
    region_name: Optional[RegionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
