from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pricingplan_enum


@dataclass_json
@dataclass
class DescribeGeofenceCollectionResponse:
    collection_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionArn' }})
    collection_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionName' }})
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    pricing_plan: pricingplan_enum.PricingPlanEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlan' }})
    pricing_plan_data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlanDataSource' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
