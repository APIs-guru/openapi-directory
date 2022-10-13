from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancequota

class ProvisioningQuotaAssetTypeEnum(str, Enum):
    ASSET_TYPE_UNSPECIFIED = "ASSET_TYPE_UNSPECIFIED"
    ASSET_TYPE_SERVER = "ASSET_TYPE_SERVER"
    ASSET_TYPE_STORAGE = "ASSET_TYPE_STORAGE"
    ASSET_TYPE_NETWORK = "ASSET_TYPE_NETWORK"


@dataclass_json
@dataclass
class ProvisioningQuota:
    asset_type: Optional[ProvisioningQuotaAssetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    available_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableCount' }})
    gcp_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpService' }})
    instance_quota: Optional[instancequota.InstanceQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceQuota' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkBandwidth' }})
    server_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCount' }})
    storage_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageGib' }})
    
