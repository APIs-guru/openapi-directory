from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1entitymetadata

class GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum(str, Enum):
    API_PROXY_TYPE_UNSPECIFIED = "API_PROXY_TYPE_UNSPECIFIED"
    PROGRAMMABLE = "PROGRAMMABLE"
    CONFIGURABLE = "CONFIGURABLE"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1APIProxy:
    api_proxy_type: Optional[GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProxyType' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    latest_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRevisionId' }})
    meta_data: Optional[googlecloudapigeev1entitymetadata.GoogleCloudApigeeV1EntityMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metaData' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    revision: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
