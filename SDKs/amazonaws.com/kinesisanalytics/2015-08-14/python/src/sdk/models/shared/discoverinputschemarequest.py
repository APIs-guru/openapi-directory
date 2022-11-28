from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscoverInputSchemaRequest:
    input_processing_configuration: Optional[InputProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfiguration') }})
    input_starting_position_configuration: Optional[InputStartingPositionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_configuration: Optional[S3Configuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    
