from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import featuredefinition
from . import offlinestoreconfig
from . import onlinestoreconfig
from . import tag


@dataclass_json
@dataclass
class CreateFeatureGroupRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_time_feature_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTimeFeatureName' }})
    feature_definitions: List[featuredefinition.FeatureDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureDefinitions' }})
    feature_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    offline_store_config: Optional[offlinestoreconfig.OfflineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfflineStoreConfig' }})
    online_store_config: Optional[onlinestoreconfig.OnlineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnlineStoreConfig' }})
    record_identifier_feature_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordIdentifierFeatureName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
