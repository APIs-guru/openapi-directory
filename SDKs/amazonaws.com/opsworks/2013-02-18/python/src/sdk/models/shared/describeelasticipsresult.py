from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import elasticip


@dataclass_json
@dataclass
class DescribeElasticIpsResult:
    elastic_ips: Optional[List[elasticip.ElasticIP]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticIps' }})
    
