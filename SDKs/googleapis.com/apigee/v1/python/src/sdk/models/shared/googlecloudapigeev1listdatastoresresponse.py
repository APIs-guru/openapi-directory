from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1datastore


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDatastoresResponse:
    datastores: Optional[List[googlecloudapigeev1datastore.GoogleCloudApigeeV1Datastore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastores' }})
    
