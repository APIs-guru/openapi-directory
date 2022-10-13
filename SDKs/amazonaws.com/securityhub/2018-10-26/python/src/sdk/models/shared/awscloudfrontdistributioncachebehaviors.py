from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awscloudfrontdistributioncachebehavior


@dataclass_json
@dataclass
class AwsCloudFrontDistributionCacheBehaviors:
    items: Optional[List[awscloudfrontdistributioncachebehavior.AwsCloudFrontDistributionCacheBehavior]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    
