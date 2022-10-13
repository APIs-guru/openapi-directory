from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAllDropletsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    tag_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAllDropletsRequest:
    query_params: ListAllDropletsQueryParams = field(default=None)
    
class ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum(str, Enum):
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

class ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum(str, Enum):
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

class ListAllDroplets200ApplicationJSONDropletsImageStatusEnum(str, Enum):
    NEW_UPPER = "NEW"
    NEW_LOWER = "new"
    AVAILABLE = "available"
    PENDING = "pending"
    DELETED = "deleted"
    RETIRED = "retired"

class ListAllDroplets200ApplicationJSONDropletsImageTypeEnum(str, Enum):
    BASE = "base"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsImage:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distribution: Optional[ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    min_disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_disk_size' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    regions: Optional[List[ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    size_gigabytes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    status: Optional[ListAllDroplets200ApplicationJSONDropletsImageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[ListAllDroplets200ApplicationJSONDropletsImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsKernel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
class ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsNetworksV4:
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    type: Optional[ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum(str, Enum):
    PUBLIC = "public"


@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsNetworksV6:
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    netmask: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    type: Optional[ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsNetworks:
    v4: Optional[List[ListAllDroplets200ApplicationJSONDropletsNetworksV4]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v4' }})
    v6: Optional[List[ListAllDroplets200ApplicationJSONDropletsNetworksV6]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v6' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsNextBackupWindow:
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDropletsSize:
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
    
class ListAllDroplets200ApplicationJSONDropletsStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    OFF = "off"
    ARCHIVE = "archive"


@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONDroplets:
    backup_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_ids' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    features: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: ListAllDroplets200ApplicationJSONDropletsImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    kernel: ListAllDroplets200ApplicationJSONDropletsKernel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernel' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    memory: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: ListAllDroplets200ApplicationJSONDropletsNetworks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    next_backup_window: ListAllDroplets200ApplicationJSONDropletsNextBackupWindow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_backup_window' }})
    region: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: ListAllDroplets200ApplicationJSONDropletsSize = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    size_slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_slug' }})
    snapshot_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot_ids' }})
    status: ListAllDroplets200ApplicationJSONDropletsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vcpus: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    volume_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_ids' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListAllDroplets200ApplicationJSON:
    droplets: Optional[List[ListAllDroplets200ApplicationJSONDroplets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplets' }})
    links: Optional[ListAllDroplets200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListAllDroplets200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListAllDroplets401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAllDropletsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_all_droplets_200_application_json_object: Optional[ListAllDroplets200ApplicationJSON] = field(default=None)
    list_all_droplets_401_application_json_object: Optional[ListAllDroplets401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
