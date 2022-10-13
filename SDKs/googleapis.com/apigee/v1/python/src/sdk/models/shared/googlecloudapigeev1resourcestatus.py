from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1revisionstatus


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ResourceStatus:
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    revisions: Optional[List[googlecloudapigeev1revisionstatus.GoogleCloudApigeeV1RevisionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    total_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReplicas' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
