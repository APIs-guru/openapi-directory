from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeatureGroup:
    r"""FeatureGroup
    Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_time_feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTimeFeatureName') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    feature_definitions: Optional[List[FeatureDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDefinitions') }})
    feature_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupArn') }})
    feature_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    feature_group_status: Optional[FeatureGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupStatus') }})
    offline_store_config: Optional[OfflineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineStoreConfig') }})
    offline_store_status: Optional[OfflineStoreStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineStoreStatus') }})
    online_store_config: Optional[OnlineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnlineStoreConfig') }})
    record_identifier_feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifierFeatureName') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
