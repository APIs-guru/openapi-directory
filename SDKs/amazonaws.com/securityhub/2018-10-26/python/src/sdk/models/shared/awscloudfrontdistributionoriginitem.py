from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscloudfrontdistributionorigins3originconfig


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginItem:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    origin_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginPath' }})
    s3_origin_config: Optional[awscloudfrontdistributionorigins3originconfig.AwsCloudFrontDistributionOriginS3OriginConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OriginConfig' }})
    
