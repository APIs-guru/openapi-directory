from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1property


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Properties:
    property: Optional[List[googlecloudapigeev1property.GoogleCloudApigeeV1Property]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    
