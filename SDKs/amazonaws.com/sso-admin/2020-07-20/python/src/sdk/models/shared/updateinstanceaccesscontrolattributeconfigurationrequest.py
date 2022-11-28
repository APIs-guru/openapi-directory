from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateInstanceAccessControlAttributeConfigurationRequest:
    instance_access_control_attribute_configuration: InstanceAccessControlAttributeConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAccessControlAttributeConfiguration') }})
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    
