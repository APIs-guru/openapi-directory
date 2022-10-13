from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1entitymetadata


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SharedFlow:
    latest_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRevisionId' }})
    meta_data: Optional[googlecloudapigeev1entitymetadata.GoogleCloudApigeeV1EntityMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metaData' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
