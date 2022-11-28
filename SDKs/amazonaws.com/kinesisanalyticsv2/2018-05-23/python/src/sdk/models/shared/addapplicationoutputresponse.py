from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddApplicationOutputResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    output_descriptions: Optional[List[OutputDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDescriptions') }})
    
