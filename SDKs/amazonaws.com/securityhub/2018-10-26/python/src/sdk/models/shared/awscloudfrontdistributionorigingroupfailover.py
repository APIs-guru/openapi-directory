from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscloudfrontdistributionorigingroupfailoverstatuscodes


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroupFailover:
    status_codes: Optional[awscloudfrontdistributionorigingroupfailoverstatuscodes.AwsCloudFrontDistributionOriginGroupFailoverStatusCodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCodes' }})
    
