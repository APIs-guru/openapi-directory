from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1attribute
from . import googlecloudapigeev1graphqloperation
from . import googlecloudapigeev1quota


@dataclass_json
@dataclass
class GoogleCloudApigeeV1GraphQlOperationConfig:
    api_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiSource' }})
    attributes: Optional[List[googlecloudapigeev1attribute.GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    operations: Optional[List[googlecloudapigeev1graphqloperation.GoogleCloudApigeeV1GraphQlOperation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    quota: Optional[googlecloudapigeev1quota.GoogleCloudApigeeV1Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    
