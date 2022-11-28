from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginS3OriginConfig:
    r"""AwsCloudFrontDistributionOriginS3OriginConfig
    Information about an origin that is an S3 bucket that is not configured with static website hosting.
    """
    
    origin_access_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginAccessIdentity') }})
    
