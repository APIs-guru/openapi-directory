from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginItem:
    r"""AwsCloudFrontDistributionOriginItem
    A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    origin_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginPath') }})
    s3_origin_config: Optional[AwsCloudFrontDistributionOriginS3OriginConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OriginConfig') }})
    
