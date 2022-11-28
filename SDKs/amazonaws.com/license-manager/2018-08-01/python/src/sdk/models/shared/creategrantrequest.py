from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGrantRequest:
    allowed_operations: List[AllowedOperationEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOperations') }})
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    grant_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantName') }})
    home_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    license_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    principals: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principals') }})
    
