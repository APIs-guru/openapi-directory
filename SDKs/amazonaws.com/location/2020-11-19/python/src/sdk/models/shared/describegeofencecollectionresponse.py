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
class DescribeGeofenceCollectionResponse:
    collection_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionArn') }})
    collection_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionName') }})
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pricing_plan: PricingPlanEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    pricing_plan_data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlanDataSource') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
