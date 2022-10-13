from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails


@dataclass_json
@dataclass
class AwsElasticsearchDomainElasticsearchClusterConfigDetails:
    dedicated_master_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedMasterCount' }})
    dedicated_master_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedMasterEnabled' }})
    dedicated_master_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedMasterType' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    zone_awareness_config: Optional[awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails.AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZoneAwarenessConfig' }})
    zone_awareness_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZoneAwarenessEnabled' }})
    
