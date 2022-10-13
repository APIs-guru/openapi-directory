from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addon
from . import instancehardware
from . import ipaddresstype_enum
from . import resourcelocation
from . import instancenetworking
from . import resourcetype_enum
from . import instancestate
from . import tag


@dataclass_json
@dataclass
class Instance:
    add_ons: Optional[List[addon.AddOn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOns' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueprintId' }})
    blueprint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueprintName' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hardware: Optional[instancehardware.InstanceHardware] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardware' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    ipv6_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Addresses' }})
    is_static_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStaticIp' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networking: Optional[instancenetworking.InstanceNetworking] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networking' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpAddress' }})
    public_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIpAddress' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshKeyName' }})
    state: Optional[instancestate.InstanceState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
