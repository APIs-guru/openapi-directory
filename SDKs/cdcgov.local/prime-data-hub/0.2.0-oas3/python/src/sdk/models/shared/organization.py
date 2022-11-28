from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrganizationJurisdictionEnum(str, Enum):
    NATIONAL = "National"
    STATE = "State"
    COUNTY = "County"


@dataclass_json
@dataclass
class Organization:
    r"""Organization
    An organization connected to data hub
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    jurisdiction: OrganizationJurisdictionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    county_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countyName') }})
    meta: Optional[SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    state_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateCode') }})
    
