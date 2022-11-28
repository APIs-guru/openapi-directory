from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeatureGroupSummary:
    r"""FeatureGroupSummary
    The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values, <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a <code>FeatureGroup</code>.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feature_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupArn') }})
    feature_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    feature_group_status: Optional[FeatureGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupStatus') }})
    offline_store_status: Optional[OfflineStoreStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineStoreStatus') }})
    
