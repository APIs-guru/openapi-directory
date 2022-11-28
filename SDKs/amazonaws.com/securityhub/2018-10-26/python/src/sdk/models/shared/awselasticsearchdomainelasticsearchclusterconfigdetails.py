from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElasticsearchDomainElasticsearchClusterConfigDetails:
    r"""AwsElasticsearchDomainElasticsearchClusterConfigDetails
    details about the configuration of an Elasticsearch cluster.
    """
    
    dedicated_master_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedMasterCount') }})
    dedicated_master_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedMasterEnabled') }})
    dedicated_master_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedMasterType') }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    zone_awareness_config: Optional[AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZoneAwarenessConfig') }})
    zone_awareness_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZoneAwarenessEnabled') }})
    
