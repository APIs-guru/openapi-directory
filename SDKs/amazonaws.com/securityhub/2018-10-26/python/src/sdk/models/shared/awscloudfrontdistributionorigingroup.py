from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscloudfrontdistributionorigingroupfailover


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroup:
    failover_criteria: Optional[awscloudfrontdistributionorigingroupfailover.AwsCloudFrontDistributionOriginGroupFailover] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailoverCriteria' }})
    
