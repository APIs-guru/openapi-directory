from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeElasticIpsResult:
    r"""DescribeElasticIpsResult
    Contains the response to a <code>DescribeElasticIps</code> request.
    """
    
    elastic_ips: Optional[List[ElasticIP]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIps') }})
    
