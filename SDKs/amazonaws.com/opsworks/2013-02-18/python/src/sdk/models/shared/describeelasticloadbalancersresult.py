from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeElasticLoadBalancersResult:
    r"""DescribeElasticLoadBalancersResult
    Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
    """
    
    elastic_load_balancers: Optional[List[ElasticLoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticLoadBalancers') }})
    
