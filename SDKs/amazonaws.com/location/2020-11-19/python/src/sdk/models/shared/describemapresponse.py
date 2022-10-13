from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mapconfiguration
from . import pricingplan_enum


@dataclass_json
@dataclass
class DescribeMapResponse:
    configuration: mapconfiguration.MapConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    map_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapArn' }})
    map_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapName' }})
    pricing_plan: pricingplan_enum.PricingPlanEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlan' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
