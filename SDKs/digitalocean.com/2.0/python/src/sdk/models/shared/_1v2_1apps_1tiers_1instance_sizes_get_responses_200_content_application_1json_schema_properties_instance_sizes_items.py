from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SHARED = "SHARED"
    DEDICATED = "DEDICATED"


@dataclass_json
@dataclass
class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems:
    cpu_type: Optional[Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    cpus: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpus' }})
    memory_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory_bytes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    tier_downgrade_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_downgrade_to' }})
    tier_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    tier_upgrade_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_upgrade_to' }})
    usd_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usd_per_month' }})
    usd_per_second: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usd_per_second' }})
    
