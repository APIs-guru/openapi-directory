from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionDetails:
    r"""AwsCloudFrontDistributionDetails
    A distribution configuration.
    """
    
    cache_behaviors: Optional[AwsCloudFrontDistributionCacheBehaviors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CacheBehaviors') }})
    default_cache_behavior: Optional[AwsCloudFrontDistributionDefaultCacheBehavior] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCacheBehavior') }})
    default_root_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRootObject') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ETag') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime') }})
    logging: Optional[AwsCloudFrontDistributionLogging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logging') }})
    origin_groups: Optional[AwsCloudFrontDistributionOriginGroups] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginGroups') }})
    origins: Optional[AwsCloudFrontDistributionOrigins] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origins') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    web_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclId') }})
    
