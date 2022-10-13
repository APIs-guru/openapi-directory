from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1datastoreconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Datastore:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    datastore_config: Optional[googlecloudapigeev1datastoreconfig.GoogleCloudApigeeV1DatastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreConfig' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetType' }})
    
