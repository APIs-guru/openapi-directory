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
class UpdateLoadBalancerAttributeRequest:
    attribute_name: LoadBalancerAttributeNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    attribute_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeValue') }})
    load_balancer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    
