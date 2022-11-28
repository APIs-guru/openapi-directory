from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFeatureGroupRequest:
    event_time_feature_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTimeFeatureName') }})
    feature_definitions: List[FeatureDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDefinitions') }})
    feature_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    record_identifier_feature_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifierFeatureName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    offline_store_config: Optional[OfflineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineStoreConfig') }})
    online_store_config: Optional[OnlineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnlineStoreConfig') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
