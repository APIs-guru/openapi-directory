from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instanceplatform_enum


@dataclass_json
@dataclass
class Bundle:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCount' }})
    disk_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeInGb' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramSizeInGb' }})
    supported_platforms: Optional[List[instanceplatform_enum.InstancePlatformEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedPlatforms' }})
    transfer_per_month_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferPerMonthInGb' }})
    
