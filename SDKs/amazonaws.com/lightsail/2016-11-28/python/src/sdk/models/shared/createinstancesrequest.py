from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateInstancesRequest:
    availability_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    blueprint_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprintId') }})
    bundle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    instance_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    add_ons: Optional[List[AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    custom_image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customImageName') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    key_pair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
