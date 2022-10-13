from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import featuregroupstatus_enum
from . import offlinestorestatus


@dataclass_json
@dataclass
class FeatureGroupSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feature_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupArn' }})
    feature_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    feature_group_status: Optional[featuregroupstatus_enum.FeatureGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupStatus' }})
    offline_store_status: Optional[offlinestorestatus.OfflineStoreStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfflineStoreStatus' }})
    
