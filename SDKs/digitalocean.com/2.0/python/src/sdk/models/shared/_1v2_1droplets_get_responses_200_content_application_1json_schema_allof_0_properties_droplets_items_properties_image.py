from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageDistributionEnum(str, Enum):
    ARCH_LINUX = "Arch Linux"
    CENT_OS = "CentOS"
    CORE_OS = "CoreOS"
    DEBIAN = "Debian"
    FEDORA = "Fedora"
    FEDORA_ATOMIC = "Fedora Atomic"
    FREE_BSD = "FreeBSD"
    GENTOO = "Gentoo"
    OPEN_SUSE = "openSUSE"
    RANCHER_OS = "RancherOS"
    UBUNTU = "Ubuntu"
    UNKNOWN = "Unknown"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageRegionsEnum(str, Enum):
    AMS1 = "ams1"
    AMS2 = "ams2"
    AMS3 = "ams3"
    BLR1 = "blr1"
    FRA1 = "fra1"
    LON1 = "lon1"
    NYC1 = "nyc1"
    NYC2 = "nyc2"
    NYC3 = "nyc3"
    SFO1 = "sfo1"
    SFO2 = "sfo2"
    SFO3 = "sfo3"
    SGP1 = "sgp1"
    TOR1 = "tor1"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageStatusEnum(str, Enum):
    NEW_UPPER = "NEW"
    NEW_LOWER = "new"
    AVAILABLE = "available"
    PENDING = "pending"
    DELETED = "deleted"
    RETIRED = "retired"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageTypeEnum(str, Enum):
    BASE = "base"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distribution: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageDistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    min_disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_disk_size' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    regions: Optional[List[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageRegionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    size_gigabytes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    status: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
