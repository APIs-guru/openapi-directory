from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _1v2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum(str, Enum):
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

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum(str, Enum):
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

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum(str, Enum):
    NEW_UPPER = "NEW"
    NEW_LOWER = "new"
    AVAILABLE = "available"
    PENDING = "pending"
    DELETED = "deleted"
    RETIRED = "retired"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum(str, Enum):
    BASE = "base"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distribution: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    min_disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_disk_size' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    regions: Optional[List[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    size_gigabytes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    status: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4:
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum(str, Enum):
    PUBLIC = "public"


@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6:
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    netmask: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks:
    v4: Optional[List[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v4' }})
    v6: Optional[List[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v6' }})
    

@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow:
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize:
    available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    memory: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    price_hourly: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    regions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    transfer: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    vcpus: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    OFF = "off"
    ARCHIVE = "archive"


@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems:
    backup_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_ids' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    features: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    kernel: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernel' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    memory: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    next_backup_window: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_backup_window' }})
    region: _1v2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    size_slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_slug' }})
    snapshot_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot_ids' }})
    status: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vcpus: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    volume_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_ids' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    
