from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateAccessRequest:
    external_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectory') }})
    home_directory_mappings: Optional[List[HomeDirectoryMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryMappings') }})
    home_directory_type: Optional[HomeDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryType') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    posix_profile: Optional[PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    
