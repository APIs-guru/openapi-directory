from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddApplicationVpcConfigurationResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    vpc_configuration_description: Optional[VpcConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationDescription') }})
    
