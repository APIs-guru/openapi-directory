from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awscloudfrontdistributionorigingroup


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroups:
    items: Optional[List[awscloudfrontdistributionorigingroup.AwsCloudFrontDistributionOriginGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    
