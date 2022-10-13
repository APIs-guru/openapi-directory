from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import settingmetadata

class OrganizationJurisdictionEnum(str, Enum):
    NATIONAL = "National"
    STATE = "State"
    COUNTY = "County"


@dataclass_json
@dataclass
class Organization:
    county_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countyName' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    jurisdiction: OrganizationJurisdictionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jurisdiction' }})
    meta: Optional[settingmetadata.SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateCode' }})
    
