from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1attribute


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ReportProperty:
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    value: Optional[List[googlecloudapigeev1attribute.GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
