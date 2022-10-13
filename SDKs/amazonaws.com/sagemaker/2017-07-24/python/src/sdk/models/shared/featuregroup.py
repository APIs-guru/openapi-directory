from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import featuredefinition
from . import featuregroupstatus_enum
from . import offlinestoreconfig
from . import offlinestorestatus
from . import onlinestoreconfig
from . import tag


@dataclass_json
@dataclass
class FeatureGroup:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_time_feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTimeFeatureName' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    feature_definitions: Optional[List[featuredefinition.FeatureDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureDefinitions' }})
    feature_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupArn' }})
    feature_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    feature_group_status: Optional[featuregroupstatus_enum.FeatureGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupStatus' }})
    offline_store_config: Optional[offlinestoreconfig.OfflineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfflineStoreConfig' }})
    offline_store_status: Optional[offlinestorestatus.OfflineStoreStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfflineStoreStatus' }})
    online_store_config: Optional[onlinestoreconfig.OnlineStoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnlineStoreConfig' }})
    record_identifier_feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordIdentifierFeatureName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
