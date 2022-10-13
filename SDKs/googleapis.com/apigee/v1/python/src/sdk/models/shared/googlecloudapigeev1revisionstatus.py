from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1updateerror


@dataclass_json
@dataclass
class GoogleCloudApigeeV1RevisionStatus:
    errors: Optional[List[googlecloudapigeev1updateerror.GoogleCloudApigeeV1UpdateError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    json_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonSpec' }})
    replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicas' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
