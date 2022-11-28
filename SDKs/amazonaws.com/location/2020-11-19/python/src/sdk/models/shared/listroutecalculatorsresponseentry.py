from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRouteCalculatorsResponseEntry:
    r"""ListRouteCalculatorsResponseEntry
    A route calculator resource listed in your AWS account.
    """
    
    calculator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculatorName') }})
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pricing_plan: PricingPlanEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
