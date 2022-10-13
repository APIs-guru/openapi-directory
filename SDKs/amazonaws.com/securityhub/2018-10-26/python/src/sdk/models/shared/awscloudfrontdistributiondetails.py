from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscloudfrontdistributioncachebehaviors
from . import awscloudfrontdistributiondefaultcachebehavior
from . import awscloudfrontdistributionlogging
from . import awscloudfrontdistributionorigingroups
from . import awscloudfrontdistributionorigins


@dataclass_json
@dataclass
class AwsCloudFrontDistributionDetails:
    cache_behaviors: Optional[awscloudfrontdistributioncachebehaviors.AwsCloudFrontDistributionCacheBehaviors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheBehaviors' }})
    default_cache_behavior: Optional[awscloudfrontdistributiondefaultcachebehavior.AwsCloudFrontDistributionDefaultCacheBehavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultCacheBehavior' }})
    default_root_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRootObject' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime' }})
    logging: Optional[awscloudfrontdistributionlogging.AwsCloudFrontDistributionLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logging' }})
    origin_groups: Optional[awscloudfrontdistributionorigingroups.AwsCloudFrontDistributionOriginGroups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginGroups' }})
    origins: Optional[awscloudfrontdistributionorigins.AwsCloudFrontDistributionOrigins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Origins' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    web_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebAclId' }})
    
