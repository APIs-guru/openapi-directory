from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addonrequest
from . import ipaddresstype_enum
from . import tag


@dataclass_json
@dataclass
class CreateInstancesRequest:
    add_ons: Optional[List[addonrequest.AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOns' }})
    availability_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    blueprint_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueprintId' }})
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    custom_image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customImageName' }})
    instance_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNames' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    key_pair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userData' }})
    
