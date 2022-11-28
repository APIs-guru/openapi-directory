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
class DescribeFeatureGroupResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_time_feature_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTimeFeatureName') }})
    feature_definitions: List[FeatureDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDefinitions') }})
    feature_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupArn') }})
    feature_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    next_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    record_identifier_feature_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifierFeatureName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    feature_group_status: Optional[FeatureGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupStatus') }})
    offline_store_config: Optional[OfflineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineStoreConfig') }})
    offline_store_status: Optional[OfflineStoreStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineStoreStatus') }})
    online_store_config: Optional[OnlineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnlineStoreConfig') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
